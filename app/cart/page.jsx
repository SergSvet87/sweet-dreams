import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Search from '@/components/search/Search';
import Order from '@/components/order/Order';

import styles from './cart.module.css';

export default function Cart() {
  return (
    <section className={styles.cart}>
      <div className="cart__container">
        <Search />
        <div className={styles.cart__wrapper}>
          <div className={styles.cart__inner}>
            <div className={styles.cart__head}>
              <Link href="/shop" className={styles.cart__continue}>
                Continue browsing
              </Link>

              <h2 className={styles.cart__title}>
                <span className={classNames(styles.title__arrows, 'arrows')} />
                <span className={styles.title__text}>shopping cart</span>
              </h2>
            </div>

            <Order />
          </div>

          <div className={styles.cart__total}>
            <div className={styles.total__head}>
              <h3 className={styles.total__title}>Subtotal</h3>
              <div className={styles.total__count}>₴930</div>
            </div>

            <div className={styles.total__order}>
              <Link className={styles.total__btn} href="#">
                check out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
