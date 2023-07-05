import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [value: T, setValue: Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
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
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving value to localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
