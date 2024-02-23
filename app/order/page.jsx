'use client';

import styles from './order.module.css';

import { OrderUserForm } from '@/components/order-user/OrderUserForm';
import Search from '@/components/search/Search';

import Image from 'next/image';

export default function Order() {
  return (
    <section className={styles.order}>
      <div className={styles.container}>
        <div className={styles.search_container}>
          <Search />
          <div className={styles.header_container}>
            <Image src="/images/order/checkout.svg" alt="checkout arrow" width={54} height={26} />
            <h1 className={styles.header}>checkout</h1>
          </div>
        </div>
        <OrderUserForm />
      </div>
    </section>
  );
}
