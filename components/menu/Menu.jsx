import Link from 'next/link';
import classNames from 'classnames';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MENU } from '@/utils/const';
import { MOBILE_MENU } from '@/utils/const';
import ToggleLanguage from '../toggle-language/ToggleLanguage';

import styles from './menu.module.css';

export default function Menu({ isOpen, setOpen, pathname }) {
  const isMobile = useMediaQuery(1440);

  const closeMenu = () => {
    setOpen(!isOpen);
  };

  return isMobile ? (
    <nav className={classNames(styles.menu, isOpen ? styles.active : '')}>
      <ToggleLanguage />
      <ul className={styles.menu__list}>
        {MOBILE_MENU.map(({ id, name, path }) => (
          <li
            key={id}
            className={classNames(
              styles.menu__item,
              styles.menu__item_mobile,
              pathname === path ? styles.active : ''
            )}
            onClick={closeMenu}>
            <Link className="menu__link" href={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {MENU.map(({ id, name, path }) => (
          <li
            key={id}
            className={classNames(styles.menu__item, pathname === path ? styles.active : '')}>
            <Link className={styles.menu__link} href={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
