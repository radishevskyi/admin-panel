import { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorageContext } from './local-storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const { updateStoredValue, getStoredValue } = useLocalStorageContext();

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      updateStoredValue('user', true);
      router.push('/');
    } else {
      alert('Incorrect login or password');
    }
  };

  const logout = () => {
    updateStoredValue('user', false);
  };

  useEffect(() => {
    if (!getStoredValue('user')) {
      router.push('/login');
    }
  }, [router]);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
