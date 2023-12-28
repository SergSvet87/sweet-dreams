'use client';

// import Image from 'next/image';
// import classNames from 'classnames';

// import { cartGoods } from '@/components/cart/Cart';

import styles from './order.module.css';

import { OrderUserForm } from '../../components/order-user/OrderUserForm';
import Image from 'next/image';
// import { OrderGoods } from '../../components/order-goods/OrderGoods';

export default function Order() {
  return (
    <section className={styles.order}>
      <div className={styles.container}>
        <div className={styles.header_container}>
          <Image src="/images/order/checkout.svg" alt="checkout arrow" width={54} height={26} />
          <h1 className={styles.header}>checkout</h1>
        </div>
        <OrderUserForm />
        {/* <OrderGoods /> */}
      </div>
    </section>
  );
}
