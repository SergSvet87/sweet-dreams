import Link from 'next/link';
import Image from 'next/image';

import Search from '@/components/search/Search';
import Decor from '@/components/decor/Decor';

import styles from './styles/not-found.module.css';

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

        <Decor />
      </section>
    </>
  );
}
