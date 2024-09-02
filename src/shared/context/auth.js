import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      router.push('/'); // Перенаправляємо на головну сторінку після успішного входу
    } else {
      alert('Incorrect login or password');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    router.push('/login'); // Перенаправляємо на сторінку логіну після виходу
  };

  useEffect(() => {
    if (!isAuthenticated && router.pathname !== '/login') {
      router.push('/login'); // Перенаправляємо на сторінку логіну, якщо користувач не авторизований
    }
  }, [isAuthenticated, router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
