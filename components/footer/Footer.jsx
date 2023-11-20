'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import { MENU } from '@/utils/const';
import Logo from '../logo/Logo';
import Contacts from '../contacts/Contacts';
import Payment from '../payment/Payment';

import styles from './footer.module.css';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <Logo className={styles.footer__logo} />

          <nav className={styles.footer__menu}>
            <ul className={styles.footer__menu__list}>
              {MENU.map(({ id, name, path }) => (
                <li
                  key={id}
                  className={styles.footer__menu__item}>
                  <Link
                    className={classNames(
                      styles.footer__menu__link,
                      pathname === path ? styles.active : ''
                    )}
                    href={path}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footer__contacts}>
            <Contacts />
          </div>

          <div className={styles.footer__payment}>
            <Payment />
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p>
            <span>&copy;</span> Candy Heaven - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
