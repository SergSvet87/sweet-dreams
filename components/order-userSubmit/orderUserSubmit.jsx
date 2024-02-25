'use client';

import { OrderGoods } from '@/components/order-goods/OrderGoods';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './orderUserSubmit.module.css';

export function OrderUserSubmit() {
  const isMobile1440 = useMediaQuery(1439);
  // Test comment
  return (
    <div className={styles.submit_goods_container}>
      {isMobile1440 && <OrderGoods />}
      <div className={styles.submit_container}>
        <div className={styles.price_container}>
          <p className={styles.subtotal}>Subtotal</p>
          <p className={styles.price}>₴300</p>
        </div>
        <button className={styles.pay_button} type="submit">
          Pay now
        </button>
      </div>
      {!isMobile1440 && <OrderGoods />}
    </div>
  );
}
