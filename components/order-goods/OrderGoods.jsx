'use client';

// import Image from 'next/image';

// import { useMediaQuery } from '@/hooks/useMediaQuery';
// import { Count } from '../count/Count';
// import {
//   FlexContainer,
//   FlexContainerPrice,
//   HeaderGood,
//   GoodDetails,
//   Test,
//   Good,
//   Table,
//   TableName,
//   SinglePrice,
//   Amount,
//   AmountPrice,
// } from './OrderGoods.styled';
import styles from './order-goods.module.css';

export function OrderGoods() {
  // const isMobile744 = useMediaQuery(744);

  return (
    <>
      <div className={styles.table}>
        <p className={styles.table_name}>Product</p>
        <p className={styles.table_name}>Total</p>
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
              <p className={styles.price_single}>₴300</p>
              <p className={styles.price_amount}>x 2</p>
              <p className={styles.price_total}>₴600</p>
            </div>
          </div>
        </div>
        <div className={styles.good}>
          <div className={styles.image}></div>
          <div className={styles.info_container}>
            <div>
              <h2 className={styles.good_name}>Candy Bird</h2>
              <h2 className={styles.good_detail}>Box of 10</h2>
              <h2 className={styles.good_detail}>Item No: 112</h2>
            </div>
            <div className={styles.price_container}>
              <p className={styles.price_single}>₴300</p>
              <p className={styles.price_amount}>x 2</p>
              <p className={styles.price_total}>₴600</p>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}
