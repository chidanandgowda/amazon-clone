import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './SignInPage.css';

function SignInPage() {
  const { user, signIn, signOut } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }

    signIn({ name: name.trim(), email: email.trim() });
    navigate('/');
  };

  const handleSignOut = () => {
    signOut();
    setPassword('');
  };

  return (
    <main className="signin" id="sign-in-page">
      <div className="signin__card">
        <h1 className="signin__title">Sign in</h1>
        <p className="signin__subtitle">Use a demo account for now. No backend required.</p>

        {user && (
          <div className="signin__signed">
            <p className="signin__signed-text">Signed in as {user.name}</p>
            <button className="signin__secondary-btn" onClick={handleSignOut} type="button">
              Sign Out
            </button>
          </div>
        )}

        <form className="signin__form" onSubmit={handleSubmit}>
          <label className="signin__label" htmlFor="signin-name">Name</label>
          <input
            className="signin__input"
            id="signin-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />

          <label className="signin__label" htmlFor="signin-email">Email</label>
          <input
            className="signin__input"
            id="signin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />

          <label className="signin__label" htmlFor="signin-password">Password</label>
          <input
            className="signin__input"
            id="signin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />

          {error && <p className="signin__error">{error}</p>}

          <button className="signin__primary-btn" type="submit">
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}

export default SignInPage;
