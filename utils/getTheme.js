
  if (typeof window !== 'undefined') {
    const theme = `${window?.localStorage?.getItem('theme')}`;

    if (Object.values(themes).includes(theme)) return theme;

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) return themes.light;

    // return themes.light;

