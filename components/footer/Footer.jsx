'use client';

import React from 'react';
import Link from 'next/link';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MENU } from '@/utils/const';
import Logo from '../logo/Logo';
import Contacts from '../contacts/Contacts';
import Payment from '../payment/Payment';

import styles from './footer.module.css';

export default function Footer() {
  const isMobile1200 = useMediaQuery(1200);
  const isMobile744 = useMediaQuery(744);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <Logo className={styles.footer__logo} />

          {isMobile1200 ? (
            <div className={styles.top_right}>
              <nav className={styles.footer__menu}>
                <ul className={styles.footer__menu__list}>
                  {MENU.map(({ id, name, path }) => (
                    <li key={id} className={styles.footer__menu__item}>
                      <Link className={styles.footer__menu__link} href={path}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.top_right_bot}>
                <Contacts />

                <Payment />
              </div>
            </div>
          ) : isMobile744 ? (
            <div className={styles.top_right}>
              <div className={styles.top_right_middle}>
                <nav className={styles.footer__menu}>
                  <ul className={styles.footer__menu__list}>
                    {MENU.map(({ id, name, path }) => (
                      <li key={id} className={styles.footer__menu__item}>
                        <Link className={styles.footer__menu__link} href={path}>
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <Contacts />
              </div>

              <Payment />
            </div>
          ) : (
            <>
              <nav className={styles.footer__menu}>
                <ul className={styles.footer__menu__list}>
                  {MENU.map(({ id, name, path }) => (
                    <li key={id} className={styles.footer__menu__item}>
                      <Link className={styles.footer__menu__link} href={path}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <Contacts />

              <Payment />
            </>
          )}
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
