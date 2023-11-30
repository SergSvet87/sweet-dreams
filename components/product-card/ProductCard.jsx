import React from 'react';
import Image from 'next/image';

import styles from './product-card.module.css';
import { Count } from '../count/Count.jsx';

export default function ProductCard({ item }) {
  return (
    <article className={styles.product}>
      <Image
        className={styles.product__img}
        src={item.src}
        alt={item.title}
        width={168}
        height={191}
        priority
      />

      <h2 className={styles.product__title}>{item.title}</h2>

      <p className={styles.product__count}>{item.count}</p>

      <div className={styles.product__favorite}>
        <div className={styles.product__rating}>
          <img src="./images/shop/star.svg" alt="" />
          <img src="./images/shop/star.svg" alt="" />
          <img src="./images/shop/star.svg" alt="" />
          <img src="./images/shop/star.svg" alt="" />
          <img src="./images/shop/star-off.svg" alt="" />
        </div>

        <div className={styles.product__like}>
          <img src="./images/shop/heart.svg" alt="" />
        </div>
      </div>

      <p className={styles.product__price}>{item.price}</p>

      <div className={styles.product__footer}>
        <Count />

        <button
          className={styles.product__add}
          type="button"
        >
          <img src="./images/shop/cart.svg" alt="" />
        </button>
      </div>
    </article>
  );
}
