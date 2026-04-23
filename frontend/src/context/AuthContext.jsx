import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const TOKEN_KEY = 'procommerce.token';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Rehydrate user from stored JWT on mount
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setLoading(false);
      return;
    }
    fetch(`${API}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(({ user: u }) => setUser(u))
      .catch(() => localStorage.removeItem(TOKEN_KEY))
      .finally(() => setLoading(false));
  }, []);

  const _saveSession = (token, u) => {
    localStorage.setItem(TOKEN_KEY, token);
    setUser(u);
  };

  // Sign in with email + password
  const signIn = useCallback(async (email, password) => {
    const res = await fetch(`${API}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Login failed.');
    _saveSession(data.token, data.user);
    return data.user;
  }, []);

  // Register new account
  const register = useCallback(async (name, email, password) => {
    const res = await fetch(`${API}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Registration failed.');
    _saveSession(data.token, data.user);
    return data.user;
  }, []);

  // Called after Google OAuth redirect brings back a token in the URL
  const handleGoogleToken = useCallback((token) => {
    return fetch(`${API}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then(({ user: u }) => {
        _saveSession(token, u);
        return u;
      });
  }, []);

  // Sign out
  const signOut = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
  }, []);

  const getToken = useCallback(() => localStorage.getItem(TOKEN_KEY), []);

  const value = useMemo(
    () => ({ user, loading, signIn, register, signOut, handleGoogleToken, getToken }),
    [user, loading, signIn, register, signOut, handleGoogleToken, getToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

