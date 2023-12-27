'use client';

// import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './order-goods.module.css';

export function OrderGoods() {
  const isMobile744 = useMediaQuery(744);

  return (
    <>
      {!isMobile744 && (
        <div className={styles.table}>
          <p className={styles.table_name}>Product</p>
          <p className={styles.table_name}>Total</p>
        </div>
      )}

      <ul className={styles.list_goods}>
        <div className={styles.good}>
          <div className={styles.info_container_image}>
            <div className={styles.image}></div>
            <div className={styles.info_container}>
              <h2 className={styles.good_name}>Candy Bird</h2>
              <div className={styles.good_detail}>
                <p>Box of 10</p>
                <p>Item No: 112</p>
              </div>
            </div>
          </div>
          <div className={styles.price_container}>
            <div className={styles.price_container_paragraph}>
              <p className={styles.price_single}>₴300</p>
              {isMobile744 && <p className={styles.table_name}>Total</p>}
            </div>
            <div className={styles.price_container_paragraph}>
              <p className={styles.price_amount}>x 2</p>
              <p className={styles.price_total}>₴600</p>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}
