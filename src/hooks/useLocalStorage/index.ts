import { useEffect, useState } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error retrieving value from localStorage:', error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      const serializedValue = JSON.stringify(storedValue);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving value to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
