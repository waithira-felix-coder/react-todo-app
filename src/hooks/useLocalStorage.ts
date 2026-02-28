import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}


// This custom hook, useLocalStorage, allows you to manage state that is synchronized with the browser's localStorage. It takes a key and an initial value as arguments, and returns the current value and a function to update it. Whenever the value changes, it is saved to localStorage, ensuring that the data persists across page reloads.