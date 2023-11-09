// import { ThemeContext, themes } from '@/contexts/ThemeContext';
// import ThemeToggle from '../theme/ThemeToggle';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import ToggleLanguage from '../toggle-language/ToggleLanguage';
import Profile from '../profile/Profile';
import Basket from '../basket/Basket';

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />

        <Menu />

        <ToggleLanguage />

        {/* <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <ThemeToggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer> */}

        <div className={styles.header__icons}>
          <Profile />

          <Basket />
        </div>
      </div>
    </header>
  );
}
