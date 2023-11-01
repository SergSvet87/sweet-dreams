'use client';

import { useEffect, useState } from 'react';

import { ThemeContext } from '@/contexts/ThemeContext';
import { getTheme } from '@/utils/getTheme';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
