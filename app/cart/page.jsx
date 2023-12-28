'use client';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import useOrderStore from '@/store/order/index';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Search from '@/components/search/Search';
import Cart from '@/components/cart/Cart';
import SubTotal from '@/components/sub-total/SubTotal';
import Decor from '@/components/decor/Decor';

import styles from './cart.module.css';

export default function CartPage() {
  const isMobile1440 = useMediaQuery(1440);
  const isMobile744 = useMediaQuery(744);
  const units = useOrderStore((state) => state.orderGoods.length);
  const orderGoods = useOrderStore((state) => state.orderGoods);
  const subTotal = useOrderStore((state) => state.subTotal);
  const price = useOrderStore((state) => state.price);
  const count = useOrderStore((state) => state.count);

  return (
    <>
      <Search />
      {orderGoods.length !== 0 ? (
        <section className={styles.cart}>
          <div className="cart__container">
            <div className={styles.cart__wrapper}>
              <div className={styles.cart__inner}>
                <div className={styles.cart__head}>
                  <h2 className={styles.cart__title}>
                    <span className={classNames(styles.title__arrows, 'arrows')} />
                    <span className={styles.title__text}>shopping cart</span>
                  </h2>

                  <Link href="/shop" className={styles.cart__continue}>
                    Continue browsing
                  </Link>
                </div>

                {isMobile1440 ? (
                  <div className={styles.cart__total}>
                    <SubTotal subTotal={subTotal} />
                  </div>
                ) : null}

                <Cart orderGoods={orderGoods} count={count} price={price} />
              </div>

              <div
                className={styles.cart__total}
                style={
                  isMobile744 ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' }
                }>
                <SubTotal subTotal={subTotal} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.cart__empty}>
          <div className={classNames("cart__container", styles.empty__wrapper)}>
            <div className={styles.empty__img}>
              <Image src="/images/cart/basket.svg" alt="Basket icon" width={240} height={240} />
            </div>
            <h2 className={styles.empty__title}>Your Shopping Cart is Empty</h2>
            <Link className={styles.empty__btn} href="/shop">
              shop now
            </Link>
          </div>

          <Decor />
        </section>
      )}
    </>
  );
}
