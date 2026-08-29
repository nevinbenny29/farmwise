require('dotenv').config();

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { Pool } = require('pg');

const app = express();

const PORT = Number(process.env.PORT || 10000);
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is required');
}

// PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false
});

// Middleware
app.use(express.json());
app.use(cookieParser());

// Frontend files are one folder above backend/
const publicDir = path.join(__dirname, '..');
app.use(express.static(publicDir));

// Email
const transporter = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
  : null;

// Helpers
function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function makeOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function setAuthCookie(res, token) {
  res.cookie('farmwise_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
}

function auth(req, res, next) {
  try {
    const token = req.cookies.farmwise_token;

    if (!token) {
      return res.status(401).json({
        error: 'Not authenticated'
      });
    }

    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({
      error: 'Session expired. Please log in again.'
    });
  }
}

// Send OTP
async function sendOtp(email, otp) {
  if (!transporter) {
    throw new Error('SMTP is not configured');
  }

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: 'FarmWise email verification code',
    text: `Your FarmWise verification code is ${otp}. It expires in 10 minutes.`,
    html: `
      <div style="font-family:Arial,sans-serif">
        <h2>FarmWise</h2>
        <p>Your verification code is:</p>
        <p style="font-size:32px;font-weight:700;letter-spacing:8px">
          ${otp}
        </p>
        <p>This code expires in 10 minutes.</p>
      </div>
    `
  });
}

// =========================
// HEALTH CHECK
// =========================

app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');

    res.status(200).json({
      ok: true,
      database: true
    });
  } catch (err) {
    console.error('Database health check failed:', err);

    res.status(503).json({
      ok: false,
      database: false
    });
  }
});

// =========================
// SIGNUP - REQUEST OTP
// =========================

app.post('/api/auth/request-signup-otp', async (req, res) => {
  try {
    const name = String(req.body.name || '').trim();
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || '');

    if (!name || !email || password.length < 6) {
      return res.status(400).json({
        error:
          'Name, valid email and password of at least 6 characters are required.'
      });
    }

    const existing = await pool.query(
      'SELECT id, email_verified FROM users WHERE email=$1',
      [email]
    );

    if (
      existing.rowCount &&
      existing.rows[0].email_verified
    ) {
      return res.status(409).json({
        error: 'An account with this email already exists.'
      });
    }

    const otp = makeOtp();

    const otpHash = await bcrypt.hash(otp, 10);
    const passwordHash = await bcrypt.hash(password, 12);

    await pool.query(
      'DELETE FROM email_otps WHERE email=$1 AND purpose=$2',
      [email, 'signup']
    );

    await pool.query(
      `INSERT INTO email_otps
       (email, purpose, otp_hash, expires_at)
       VALUES ($1, $2, $3, NOW() + INTERVAL '10 minutes')`,
      [email, 'signup', otpHash]
    );

    if (existing.rowCount) {
      await pool.query(
        `UPDATE users
         SET name=$1, password_hash=$2
         WHERE email=$3`,
        [name, passwordHash, email]
      );
    } else {
      await pool.query(
        `INSERT INTO users
         (name, email, password_hash)
         VALUES ($1, $2, $3)`,
        [name, email, passwordHash]
      );
    }

    await sendOtp(email, otp);

    res.json({
      ok: true,
      message: 'OTP sent to your email.'
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: 'Could not send OTP. Check SMTP settings.'
    });
  }
});

// =========================
// SIGNUP - VERIFY OTP
// =========================

app.post('/api/auth/verify-signup-otp', async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const otp = String(req.body.otp || '').trim();

    if (!/^\d{6}$/.test(otp)) {
      return res.status(400).json({
        error: 'Enter the 6-digit OTP.'
      });
    }

    const result = await pool.query(
      `SELECT *
       FROM email_otps
       WHERE email=$1
       AND purpose='signup'
       ORDER BY created_at DESC
       LIMIT 1`,
      [email]
    );

    if (!result.rowCount) {
      return res.status(400).json({
        error: 'OTP not found. Request a new one.'
      });
    }

    const row = result.rows[0];

    if (new Date(row.expires_at) < new Date()) {
      return res.status(400).json({
        error: 'OTP expired. Request a new one.'
      });
    }

    if (row.attempts >= 5) {
      return res.status(429).json({
        error: 'Too many attempts. Request a new OTP.'
      });
    }

    const valid = await bcrypt.compare(
      otp,
      row.otp_hash
    );

    if (!valid) {
      await pool.query(
        'UPDATE email_otps SET attempts=attempts+1 WHERE id=$1',
        [row.id]
      );

      return res.status(400).json({
        error: 'Incorrect OTP.'
      });
    }

    const userResult = await pool.query(
      `UPDATE users
       SET email_verified=true
       WHERE email=$1
       RETURNING id,name,email`,
      [email]
    );

    await pool.query(
      'DELETE FROM email_otps WHERE id=$1',
      [row.id]
    );

    const user = userResult.rows[0];

    setAuthCookie(
      res,
      signToken(user)
    );

    res.json({
      ok: true,
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: 'Verification failed.'
    });
  }
});

// =========================
// LOGIN
// =========================

app.post('/api/auth/login', async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const password = String(req.body.password || '');

    const result = await pool.query(
      `SELECT
        id,
        name,
        email,
        password_hash,
        email_verified
       FROM users
       WHERE email=$1`,
      [email]
    );

    if (!result.rowCount) {
      return res.status(401).json({
        error: 'Invalid email address or password.'
      });
    }

    const user = result.rows[0];

    if (!user.email_verified) {
      return res.status(403).json({
        error:
          'Please verify your email with OTP before logging in.'
      });
    }

    const passwordValid = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordValid) {
      return res.status(401).json({
        error: 'Invalid email address or password.'
      });
    }

    setAuthCookie(
      res,
      signToken(user)
    );

    res.json({
      ok: true,
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: 'Login failed.'
    });
  }
});

// =========================
// CURRENT USER
// =========================

app.get('/api/auth/me', auth, async (req, res) => {
  res.json({
    authenticated: true,
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    }
  });
});

// =========================
// LOGOUT
// =========================

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('farmwise_token');

  res.json({
    ok: true
  });
});

// =========================
// FRONTEND FALLBACK
// =========================

app.get('*splat', (req, res) => {
  res.sendFile(
    path.join(publicDir, 'main.html')
  );
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log(
    `FarmWise server running on port ${PORT}`
  );
});
