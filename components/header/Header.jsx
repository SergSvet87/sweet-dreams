'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import ToggleLanguage from '../toggle-language/ToggleLanguage';
import Profile from '../profile/Profile';
import Basket from '../basket/Basket';
import { MenuButton } from '../menu-button/MenuButton';

import styles from './header.module.css';

export default function Header() {
  const [isActive, setActive] = useState();
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const isMobile1440 = useMediaQuery(1440);
  const isMobile744 = useMediaQuery(744);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {isMobile1440 ? (
          <>
            <Logo />
            {isMobile744 ? '' : <ToggleLanguage />}
            <div className={styles.header__icons}>
              <Profile />

              <Basket />
            </div>
            <MenuButton onClick={() => setOpen(!isOpen)} isOpen={isOpen} setOpen={setOpen} />
            <Menu isOpen={isOpen} setOpen={setOpen} pathname={pathname} />
          </>
        ) : (
          <>
            <Logo />
            <Menu isActive={isActive} setActive={setActive} pathname={pathname} />
            <ToggleLanguage />
            <div className={styles.header__icons}>
              <Profile />

              <Basket />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
