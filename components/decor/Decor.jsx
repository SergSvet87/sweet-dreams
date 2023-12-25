import Image from 'next/image';

import styles from './decor.module.css';

export default function Decor() {
  return (
    <>
      <div className={styles.decor__angel_1}>
        <Image src="/images/decor/angel.svg" alt="Angel Icon" width={96} height={95} />
      </div>

      <div className={styles.decor__angel_2}>
        <Image src="/images/decor/angel_2.svg" alt="Angel Icon" width={121} height={121} />
      </div>

      <div className={styles.decor__angel_3}>
        <Image src="/images/decor/angel_3.png" alt="Angel Icon" width={129} height={114} />
      </div>

      <div className={styles.decor__angel_4}>
        <Image src="/images/decor/angel.svg" alt="Angel Icon" width={96} height={95} />
      </div>

      <div className={styles.decor__angel_5}>
        <Image src="/images/decor/angel.svg" alt="Angel Icon" width={96} height={95} />
      </div>

      <div className={styles.decor__angel_6}>
        <Image src="/images/decor/angel_3.png" alt="Angel Icon" width={129} height={114} />
      </div>
    </>
  );
}
