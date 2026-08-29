const SESSION_KEY = 'farmwise_session';
let pendingSignup = null;

function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('login-form').classList.toggle('hidden', !isLogin);
  document.getElementById('signup-form').classList.toggle('hidden', isLogin);
  document.getElementById('otp-form').classList.add('hidden');
  document.getElementById('tab-login').classList.toggle('text-slate-500', !isLogin);
  document.getElementById('tab-signup').classList.toggle('text-slate-500', isLogin);
  document.getElementById('tab-login').classList.toggle('bg-white', isLogin);
  document.getElementById('tab-signup').classList.toggle('bg-white', !isLogin);
}
function showError(id, msg) { const el=document.getElementById(id); el.textContent=msg; el.classList.remove('hidden'); }
function hideError(id) { document.getElementById(id).classList.add('hidden'); }
async function api(url, options={}) {
  const res = await fetch(url, { credentials:'include', headers:{'Content-Type':'application/json', ...(options.headers||{})}, ...options });
  const data = await res.json().catch(()=>({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

async function handleSignup(event) {
  event.preventDefault(); hideError('signup-error');
  const name=document.getElementById('signup-name').value.trim();
  const email=document.getElementById('signup-email').value.trim().toLowerCase();
  const password=document.getElementById('signup-password').value;
  const confirm=document.getElementById('signup-password-confirm').value;
  if(password!==confirm){ showError('signup-error','Passwords do not match.'); return false; }
  try {
    await api('/api/auth/request-signup-otp',{method:'POST',body:JSON.stringify({name,email,password})});
    pendingSignup={name,email};
    document.getElementById('otp-email').textContent=email;
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('otp-form').classList.remove('hidden');
    document.getElementById('signup-otp').focus();
  } catch(e){ showError('signup-error',e.message); }
  return false;
}
async function verifyOtp(event){
  event.preventDefault(); hideError('otp-error');
  try {
    const data=await api('/api/auth/verify-signup-otp',{method:'POST',body:JSON.stringify({email:pendingSignup.email,otp:document.getElementById('signup-otp').value.trim()})});
    localStorage.setItem(SESSION_KEY,JSON.stringify(data.user));
    window.location.href='main.html';
  } catch(e){ showError('otp-error',e.message); }
  return false;
}
async function resendOtp(){
  if(!pendingSignup)return;
  hideError('otp-error');
  try { await api('/api/auth/request-signup-otp',{method:'POST',body:JSON.stringify({name:pendingSignup.name,email:pendingSignup.email,password:document.getElementById('signup-password').value})}); alert('A new OTP was sent.'); }
  catch(e){ showError('otp-error',e.message); }
}
async function handleLogin(event){
  event.preventDefault(); hideError('login-error');
  const email=document.getElementById('login-identifier').value.trim().toLowerCase();
  const password=document.getElementById('login-password').value;
  try {
    const data=await api('/api/auth/login',{method:'POST',body:JSON.stringify({email,password})});
    localStorage.setItem(SESSION_KEY,JSON.stringify(data.user));
    window.location.href='main.html';
  } catch(e){ showError('login-error',e.message); }
  return false;
}
