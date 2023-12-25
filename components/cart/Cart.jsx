'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import CartGoods from '../cart-goods/CartGoods';

import styles from './cart.module.css';

export const cartGoods = [
  {
    id: 1,
    image: '/images/products/card_6.png',
    title: 'Swirl Sweets',
    quantity: 'Box of 10',
    code: '123',
    price: '200',
    count: 2,
    total: '400',
  },

  {
    id: 2,
    image: '/images/products/card_2.png',
    title: 'Swirl Sweets2',
    quantity: 'Box of 10',
    code: '125',
    price: '300',
    count: 3,
    total: '900',
  },

  {
    id: 3,
    image: '/images/products/card_3.png',
    title: 'Swirl Sweets3',
    quantity: 'Box of 10',
    code: '127',
    price: '300',
    count: 3,
    total: '900',
  },

  {
    id: 4,
    image: '/images/products/card_4.png',
    title: 'Swirl Sweets4',
    quantity: 'Box of 10',
    code: '129',
    price: '300',
    count: 1,
    total: '300',
  },
];

export default function Cart({ orderGoods, count, price }) {
  const isMobile744 = useMediaQuery(744);

  return (
    <div className={styles.cart}>
      <ul className={styles.cart__list}>
        {isMobile744 ? (
          ''
        ) : (
          <li className={styles.cart__item}>
            <p className={styles.label__name}>Product</p>

            <p className={styles.label__price}>Price</p>

            <p className={styles.label__quantity}>Quantity</p>

            <p className={styles.label__total}>Total</p>

            <p className={styles.label__remove}></p>
          </li>
        )}

        {orderGoods.map((item) => (
          <li key={item.id} className={styles.cart__item}>
            <CartGoods item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
