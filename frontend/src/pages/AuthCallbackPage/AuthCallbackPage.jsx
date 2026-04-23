import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

/**
 * Landing page for Google OAuth redirect callback.
 * The backend redirects here with ?token=<jwt>
 * We store it and redirect to home.
 */
function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const { handleGoogleToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
      navigate('/signin?error=google_failed', { replace: true });
      return;
    }

    if (token) {
      handleGoogleToken(token)
        .then(() => navigate('/', { replace: true }))
        .catch(() => navigate('/signin?error=google_failed', { replace: true }));
    } else {
      navigate('/signin', { replace: true });
    }
  }, [searchParams, handleGoogleToken, navigate]);

  return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '15px' }}>
        Signing you in…
      </p>
    </main>
  );
}

export default AuthCallbackPage;
