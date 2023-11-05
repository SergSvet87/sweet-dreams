import Link from 'next/link';
import cn from 'classnames';

import { MENU_PROFILE_AUTH } from '@/utils/const';

import styles from './profile-menu.module.css';

export default function ProfileMenu({ isOpen, profileMenuRef }) {
  return (
    <nav className={cn(styles.profile__menu, isOpen ? styles.active : '')} ref={profileMenuRef}>
      <ul className={styles.menu__list}>
        {MENU_PROFILE_AUTH.map((item) => (
          <li className={styles.menu__item} key={item.id}>
            <Link href={item.path} onClick={() => isOpen(false)}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
