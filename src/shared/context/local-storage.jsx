import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

const LocalStorageContext = createContext(null);

export const LocalStorageProvider = ({ children }) => {
  const [storedValues, setStoredValues] = useState({});

  const getStoredValue = useCallback((key) => {
    const storedValue = localStorage.getItem(key);
    try {
      return JSON.parse(storedValue);
    } catch {
      return storedValue; // In case if value is string
    }
  }, []);

  const updateStoredValue = (key, newValue) => {
    if (typeof newValue === 'string') {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
    setStoredValues((prev) => ({ ...prev, [key]: newValue }));
  };

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const initialValues = {};
    keys.forEach((key) => {
      const storedValue = getStoredValue(key);
      if (storedValue !== null) {
        initialValues[key] = storedValue;
      }
    });
    setStoredValues(initialValues);
  }, [getStoredValue]);

  return (
    <LocalStorageContext.Provider
      value={{ storedValues, updateStoredValue, getStoredValue }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      'useLocalStorageContext must be used within a LocalStorageProvider'
    );
  }
  return context;
};
