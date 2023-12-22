import Link from 'next/link';

import styles from './team.module.css';

export default function Team() {
  return (
    <section className={styles.team} id="team">
      <div className={`"team__container" ${styles.team__wrapper}`}>
        <h2 className={styles.team__title}>Our Team</h2>
        <ul className={styles.team__list}>
          <li className={styles.team__item}>
            <Link href="#">Krystyna Shevchenko - Project Manager</Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Ihor Arkhypenko - BackEnd</Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">??? - FrontEnd </Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Oksana Reznikova - QA</Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Serhii Svitlychnyi - FrontEnd</Link>
          </li>
          <li className={styles.team__item}>
            <Link href="#">Liudmyla Bardiuzha - Designer</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
