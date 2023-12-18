import Link from 'next/link';
import Image from 'next/image';

import styles from './styles/not-found.module.css';
import Search from '@/components/search/Search.jsx';

export default function NotFound() {
  return (
    <>
      <Search />

      <section className={styles.notFound}>
        <div className="notFound__container">
          <div className={styles.notFound__img}>
            <p className={styles.notFound__number}>4</p>
            <Image src="/images/not_found/candy-jar.png" alt="Candy Jar" width={158} height={159} />
            <p className={styles.notFound__number}>4</p>
          </div>
          <h2 className={styles.notFound__title}>Page Not Found</h2>
          <Link className={styles.notFound__btn} href="/">
            go to homepage
          </Link>
        </div>

        <div className={styles.notFound__angel_1}>
          <Image src="/images/not_found/angel.svg" alt="Angel Icon" width={96} height={95} />
        </div>

        <div className={styles.notFound__angel_2}>
          <Image src="/images/not_found/angel_2.svg" alt="Angel Icon" width={96} height={95} />
        </div>

        <div className={styles.notFound__angel_3}>
          <Image src="/images/not_found/angel_1.svg" alt="Angel Icon" width={96} height={95} />
        </div>

        <div className={styles.notFound__angel_4}>
          <Image src="/images/not_found/angel.svg" alt="Angel Icon" width={96} height={95} />
        </div>

        <div className={styles.notFound__angel_5}>
          <Image src="/images/not_found/angel.svg" alt="Angel Icon" width={96} height={95} />
        </div>

        <div className={styles.notFound__angel_6}>
          <Image src="/images/not_found/angel_1.svg" alt="Angel Icon" width={96} height={95} />
        </div>
      </section>
    </>
  );
}
