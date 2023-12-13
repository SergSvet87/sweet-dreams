import Link from 'next/link';
import cn from 'classnames';

import { MENU_PROFILE, MENU_PROFILE_AUTH } from '@/utils/const';

import styles from './profile-menu.module.css';

export default function ProfileMenu({ isOpen, setOpen, profileMenuRef, isLogged, setIsLogged }) {
  const handleClick = () => {
    setOpen(false);
  };

  const logout = async () => {
    localStorage.removeItem('user');
    setOpen(false);
    setIsLogged(false);
  };

  return (
    <nav className={cn(styles.profile__menu, isOpen ? styles.active : '')} ref={profileMenuRef}>
      <ul className={styles.menu__list}>
        {isLogged
          ? MENU_PROFILE.map((item) =>
              item.name === 'exit' ? (
                <li className={styles.menu__item} key={item.id} onClick={logout}>
                  <Link href={item.path}>
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ) : (
                <li className={styles.menu__item} key={item.id} onClick={handleClick}>
                  <Link href={item.path}>
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            )
          : MENU_PROFILE_AUTH.map((item) => (
              <li className={styles.menu__item} key={item.id} onClick={handleClick}>
                <Link href={item.path}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  );
}
