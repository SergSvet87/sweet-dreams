import Link from 'next/link';

import styles from './sub-total.module.css';

export default function SubTotal({subTotal}) {
  return (
    <div className={styles.total}>
      <div className={styles.total__head}>
        <h3 className={styles.total__title}>Subtotal</h3>
        <div className={styles.total__count}>₴{subTotal}</div>
      </div>

      <div className={styles.total__order}>
        <Link className={styles.total__btn} href="/order">
          check out
        </Link>
      </div>
    </div>
  );
}
