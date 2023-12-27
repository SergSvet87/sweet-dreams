'use client';

// import Image from 'next/image';

import styles from './order-goods.module.css';

export function OrderGoods() {
  // const isMobile744 = useMediaQuery(744);

  return (
    <>
      <div className={styles.table}>
        <p className={styles.table_name}>Product</p>
        {/* <p className={styles.table_name}>Total</p> */}
      </div>
      <ul>
        <div className={styles.good}>
          <div className={styles.image}></div>
          <div className={styles.info_container}>
            <div>
              <h2 className={styles.good_name}>Candy Bird</h2>
              <h2 className={styles.good_detail}>Box of 10</h2>
              <h2 className={styles.good_detail}>Item No: 112</h2>
            </div>
            <div className={styles.price_container}>
              <div>
                <p className={styles.price_single}>₴300</p>
                <p className={styles.price_amount}>x 2</p>
              </div>
              <div>
                <p className={styles.table_name}>Total</p>
                <p className={styles.price_total}>₴600</p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}
