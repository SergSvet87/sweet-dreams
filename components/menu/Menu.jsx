import Link from 'next/link';

import { MENU } from '@/utils/const.js';
import { MOBILE_MENU } from '@/utils/const.js';

import styles from './menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {MENU.map(({ id, name, path }) => (
          <li key={id} className={styles.menu__item}>
            <Link className={styles.menu__link} href={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
