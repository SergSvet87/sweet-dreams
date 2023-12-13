import Link from 'next/link';
import Image from 'next/image';

import styles from './styles/not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__img}>
        <Image src="/images/not_found/candy-jar.png" alt="Candy Jar" width={190} height={191} />
      </div>
      <h2 className={styles.notFound__title}>This Candy Jar is Empty</h2>
      <p className={styles.notFound__text}>404</p>
      <p className={styles.notFound__subtitle}>Page Not Found</p>
      <Link className={styles.notFound__btn} href="/">
        go to homepage
      </Link>
    </div>
  );
}
