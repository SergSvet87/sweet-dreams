import Link from 'next/link';
import classNames from 'classnames';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MENU, SUB_MENU } from '@/utils/const';
import { MOBILE_MENU } from '@/utils/const';
import ToggleLanguage from '../toggle-language/ToggleLanguage';

import styles from './menu.module.css';

export default function Menu({ isOpen, setOpen, pathname }) {
  const isMobile744 = useMediaQuery(744);
  const isMobile1440 = useMediaQuery(1440);

  const closeMenu = () => {
    setOpen(!isOpen);
  };

  return isMobile1440 ? (
    <nav className={classNames(styles.menu, isOpen ? styles.active : '')}>
      {isMobile744 ? <ToggleLanguage /> : ''}
      <ul className={styles.menu__list}>
        {MOBILE_MENU.map(({ id, name, path }) => (
          <li
            key={id}
            className={classNames(styles.menu__item, styles.menu__item_mobile)}
            onClick={closeMenu}>
            <Link
              className={classNames('menu__link', pathname === path ? styles.active : '')}
              href={path}>
              {name}
            </Link>
            {name === 'shop now' ? (
              <ul className={styles.menu__list_sub}>
                {SUB_MENU.map(({ id, name, path }) => (
                  <li key={id} className={classNames(styles.menu__item, styles.menu__item_sub)}>
                    <Link className={styles.menu__link} href={path}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
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
            className={classNames(
              styles.menu__item,
              pathname === path ? styles.active : '',
              name === 'shop now' ? styles.menu__item_drop : ''
            )}>
            <Link className={styles.menu__link} href={path}>
              {name}
            </Link>
            {name === 'shop now' ? (
              <ul className={styles.menu__list_sub}>
                {SUB_MENU.map(({ id, name, path }) => (
                  <li key={id} className={classNames(styles.menu__item, styles.menu__item_sub)}>
                    <Link className={styles.menu__link} href={path}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
