'use client';

import OrderGoods from '../order-goods/OrderGoods';

import styles from './order.module.css';

const orderGoods = [
  {
    id: 1,
    src: '/images/products/card_1.png',
    title: 'Swirl Sweets',
    count: 'Box of 10',
    code: '123',
    price: '200',
    quantity: 2,
    total: '400',
  },

  {
    id: 2,
    image: '/images/products/card_2.png',
    title: 'Swirl Sweets2',
    count: 'Box of 10',
    code: '125',
    price: '300',
    quantity: 3,
    total: '900',
  },
];

export default function Order() {
  return (
    <div className={styles.order}>     

      <ul className={styles.order__list}>
      <li className={styles.order__item}>
        <p className={styles.label__name}>Product</p>

        <p className={styles.label__price}>Price</p>

        <p className={styles.label__quantity}>Quantity</p>

        <p className={styles.label__total}>Total</p>

        <p className={styles.label__remove}></p>
      </li>
        {orderGoods.map((item) => (
          <li key={item.id} className={styles.order__item}>
            <OrderGoods item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
