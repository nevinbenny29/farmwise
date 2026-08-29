# FarmWise backend

This backend replaces the browser-only `localStorage` account system with PostgreSQL, bcrypt password hashing, email OTP verification, and an HTTP-only JWT cookie.

## Local setup

1. Install Node.js 20+.
2. Create PostgreSQL database `farmwise`.
3. Run `schema.sql` in that database.
4. Copy `.env.example` to `.env` and fill in `DATABASE_URL`, `JWT_SECRET`, and SMTP values.
5. From this folder run `npm install` then `npm start`.
6. Open `http://localhost:10000/login.html`.

For Gmail SMTP, use a Google App Password, not your normal Gmail password.

## Render

Use the included `render.yaml` Blueprint. Render creates the PostgreSQL database and web service. Add the SMTP variables in the Render dashboard.
