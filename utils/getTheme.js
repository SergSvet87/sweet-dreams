import { themes } from '@/contexts/ThemeContext';

export const getTheme = () => {
  const theme = `${global?.localStorage?.getItem('theme')}`;

  if (Object.values(themes).includes(theme)) return theme;
  const matchMedia = '';
  if (typeof window !== 'undefined') {
    const matchMedia = window.matchMedia('(prefers-color-scheme: light)');
    return matchMedia;
  }
  const userMedia = matchMedia;

  if (userMedia.matches) return themes.light;

  return themes.dark;
};
