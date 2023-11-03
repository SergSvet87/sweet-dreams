import { themes } from '@/contexts/ThemeContext';

export const getTheme = () => {
  const theme = `${global?.localStorage?.getItem('theme')}`;

  if (Object.values(themes).includes(theme)) return theme;
  if (typeof window !== 'undefined') {
    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) return themes.light;
  }

  return themes.dark;
};