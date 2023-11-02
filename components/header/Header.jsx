'use client';

import { ThemeContext, themes } from '@/contexts/ThemeContext';
import ThemeToggle from '../theme/ThemeToggle';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import Profile from '../profile/Profile';

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />

        <Menu />

        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <ThemeToggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer>

        <Profile />
      </div>
    </header>
  );
}
