import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorageContext } from './local-storage';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const { updateStoredValue, getStoredValue } = useLocalStorageContext();
  const [username, setUsername] = useState(null);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUsername(username);
      updateStoredValue('user', { loggedIn: true, username });
      router.push('/');
    } else {
      alert('Incorrect login or password');
    }
  };

  const logout = () => {
    updateStoredValue('user', { loggedIn: false, username: null });
    setUsername(null);
  };

  useEffect(() => {
    const userData = getStoredValue('user');
    if (!userData?.loggedIn) {
      router.push('/login');
    } else {
      setUsername(userData.username);
    }
  }, [router]);

  return (
    <AuthContext.Provider value={{ login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
