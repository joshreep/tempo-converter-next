'use client';

import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export default function usePersistedState<T>(key: string, initialValue: T) {
  const getValueFromStorage = useCallback(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
    } catch (error) {
      console.error(`Error retrieving value for key "${key}" from localStorage:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  const [value, setValue] = useState(getValueFromStorage);

  const setValueToStorage: Dispatch<SetStateAction<T>> = useCallback(
    (newValue) => {
      if (typeof window === 'undefined') return;

      const rollbackValue = value; // Save the current value for rollback in case of error
      try {
        setValue((previousValue) => {
          const resolvedValue = newValue instanceof Function ? newValue(previousValue) : newValue;
          localStorage.setItem(key, JSON.stringify(resolvedValue));
          return resolvedValue;
        });
      } catch (error) {
        console.error(`Error setting value for key "${key}" in localStorage:`, error);
        // Rollback to the previous value if an error occurs
        setValue(rollbackValue);
      }
    },
    [key, value],
  );

  return [value, setValueToStorage] as const;
}
