import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './SignInPage.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function SignInPage({ defaultTab = 'signin' }) {
  const { user, signIn, register, signOut, handleGoogleToken } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [tab, setTab] = useState(defaultTab); // 'signin' | 'signup'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Sign In fields
  const [siEmail, setSiEmail] = useState('');
  const [siPassword, setSiPassword] = useState('');

  // Sign Up fields
  const [suName, setSuName] = useState('');
  const [suEmail, setSuEmail] = useState('');
  const [suPassword, setSuPassword] = useState('');
  const [suConfirm, setSuConfirm] = useState('');

  // Handle Google OAuth callback: ?token=<jwt>
  useEffect(() => {
    const token = searchParams.get('token');
    const err = searchParams.get('error');
    if (token) {
      handleGoogleToken(token).then(() => navigate('/'));
    }
    if (err) {
      setError('Google sign-in failed. Please try again.');
    }
  }, [searchParams, handleGoogleToken, navigate]);

  const clearError = () => setError('');

  // ── Sign In ──────────────────────────────────────────────────────────────────
  const handleSignIn = async (e) => {
    e.preventDefault();
    clearError();
    if (!siEmail || !siPassword) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      await signIn(siEmail, siPassword);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ── Sign Up ──────────────────────────────────────────────────────────────────
  const handleSignUp = async (e) => {
    e.preventDefault();
    clearError();
    if (!suName || !suEmail || !suPassword || !suConfirm) {
      setError('Please fill in all fields.');
      return;
    }
    if (suPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (suPassword !== suConfirm) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      await register(suName, suEmail, suPassword);
      setSuccessMsg('Account created! Welcome aboard 🎉');
      setTimeout(() => navigate('/'), 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ── Google OAuth (redirect flow) ─────────────────────────────────────────────
  const handleGoogleSignIn = () => {
    window.location.href = `${API}/api/auth/google`;
  };

  // ── Already signed in ────────────────────────────────────────────────────────
  if (user) {
    return (
      <main className="signin" id="sign-in-page">
        <div className="signin__card">
          <div className="signin__avatar-ring">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="signin__avatar-img" />
            ) : (
              <span className="signin__avatar-initial">{user.name?.[0]?.toUpperCase()}</span>
            )}
          </div>
          <h1 className="signin__title">Welcome back!</h1>
          <p className="signin__subtitle">Signed in as <strong>{user.name}</strong></p>
          <p className="signin__email-label">{user.email}</p>
          <div className="signin__signed-actions">
            <Link to="/" className="signin__primary-btn">Continue Shopping</Link>
            <button className="signin__secondary-btn" onClick={signOut} type="button">
              Sign Out
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="signin" id="sign-in-page">
      <div className="signin__card">
        {/* Logo / Brand */}
        <div className="signin__brand">
          <span className="signin__brand-icon">🛒</span>
          <span className="signin__brand-name">ProCommerce</span>
        </div>

        {/* Tab Switcher */}
        <div className="signin__tabs">
          <button
            className={`signin__tab ${tab === 'signin' ? 'signin__tab--active' : ''}`}
            onClick={() => { setTab('signin'); clearError(); }}
            type="button"
          >
            Sign In
          </button>
          <button
            className={`signin__tab ${tab === 'signup' ? 'signin__tab--active' : ''}`}
            onClick={() => { setTab('signup'); clearError(); }}
            type="button"
          >
            Create Account
          </button>
        </div>

        {/* Error / Success */}
        {error && <div className="signin__alert signin__alert--error">{error}</div>}
        {successMsg && <div className="signin__alert signin__alert--success">{successMsg}</div>}

        {/* ── Sign In Form ── */}
        {tab === 'signin' && (
          <form className="signin__form" onSubmit={handleSignIn} noValidate>
            <div className="signin__field">
              <label className="signin__label" htmlFor="si-email">Email</label>
              <input
                className="signin__input"
                id="si-email"
                type="email"
                value={siEmail}
                onChange={(e) => setSiEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="signin__field">
              <label className="signin__label" htmlFor="si-password">Password</label>
              <input
                className="signin__input"
                id="si-password"
                type="password"
                value={siPassword}
                onChange={(e) => setSiPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>
            <button className="signin__primary-btn" type="submit" disabled={loading}>
              {loading ? <span className="signin__spinner" /> : 'Sign In'}
            </button>
          </form>
        )}

        {/* ── Sign Up Form ── */}
        {tab === 'signup' && (
          <form className="signin__form" onSubmit={handleSignUp} noValidate>
            <div className="signin__field">
              <label className="signin__label" htmlFor="su-name">Full Name</label>
              <input
                className="signin__input"
                id="su-name"
                type="text"
                value={suName}
                onChange={(e) => setSuName(e.target.value)}
                placeholder="Jane Doe"
                autoComplete="name"
                required
              />
            </div>
            <div className="signin__field">
              <label className="signin__label" htmlFor="su-email">Email</label>
              <input
                className="signin__input"
                id="su-email"
                type="email"
                value={suEmail}
                onChange={(e) => setSuEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="signin__field">
              <label className="signin__label" htmlFor="su-password">Password</label>
              <input
                className="signin__input"
                id="su-password"
                type="password"
                value={suPassword}
                onChange={(e) => setSuPassword(e.target.value)}
                placeholder="Min. 6 characters"
                autoComplete="new-password"
                required
              />
            </div>
            <div className="signin__field">
              <label className="signin__label" htmlFor="su-confirm">Confirm Password</label>
              <input
                className="signin__input"
                id="su-confirm"
                type="password"
                value={suConfirm}
                onChange={(e) => setSuConfirm(e.target.value)}
                placeholder="Repeat password"
                autoComplete="new-password"
                required
              />
            </div>
            <button className="signin__primary-btn" type="submit" disabled={loading}>
              {loading ? <span className="signin__spinner" /> : 'Create Account'}
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="signin__divider">
          <span className="signin__divider-line" />
          <span className="signin__divider-text">or continue with</span>
          <span className="signin__divider-line" />
        </div>

        {/* Google Button */}
        <button className="signin__google-btn" onClick={handleGoogleSignIn} type="button">
          <svg className="signin__google-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        {/* Footer switch link */}
        <p className="signin__footer">
          {tab === 'signin' ? (
            <>Don't have an account?{' '}
              <button className="signin__link-btn" onClick={() => { setTab('signup'); clearError(); }} type="button">
                Create one
              </button>
            </>
          ) : (
            <>Already have an account?{' '}
              <button className="signin__link-btn" onClick={() => { setTab('signin'); clearError(); }} type="button">
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
    </main>
  );
}

export default SignInPage;
