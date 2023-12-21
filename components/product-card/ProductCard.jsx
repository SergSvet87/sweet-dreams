import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Count } from '../count/Count';

import styles from './product-card.module.css';

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

      <Link href={`/product/${item.id}`}>
        <h2 className={styles.product__title}>{item.title}</h2>
      </Link>

      <p className={styles.product__count}>{item.count}</p>

      <div className={styles.product__favorite}>
        <div className={styles.product__rating}>
          <img src="/images/shop/star.svg" alt="" />
          <img src="/images/shop/star.svg" alt="" />
          <img src="/images/shop/star.svg" alt="" />
          <img src="/images/shop/star.svg" alt="" />
          <img src="/images/shop/star-off.svg" alt="" />
        </div>

        <div className={styles.product__like}>
          <img className={styles.like__img} src="/images/shop/heart.svg" alt="" />
        </div>
      </div>

      <p className={styles.product__price}>{item.price}</p>

      <div className={styles.product__footer}>
        <Count id={item.id} count={item.quantity} />

        <button className={styles.product__add} type="button">
          <img src="/images/shop/cart.svg" alt="" />
        </button>
      </div>
    </article>
  );
}
