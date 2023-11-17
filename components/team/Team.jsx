import React from 'react';
import Link from 'next/link';

import styles from './team.module.css';

export default function Team() {
  return (
    <div className={styles.team}>
      <div className="team__container">
        <h2 className={styles.team__title}>Our Team</h2>
        <ul className={styles.team__list}>
          <li className={styles.team__item}>
            <Link href="#">Oleksandr Vivchar - Project Manager</Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Ihor Arkhypenko - BackEnd</Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Cyrill Cherevatyi - FrontEnd </Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Tatiana Lebeda - QA</Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Serhii Svitlychnyi - FrontEnd</Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Liudmyla Bardiuzha - Designer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
