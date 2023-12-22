import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './products-card.module.css';

const images = [
  {
    src: '/images/products/card_1.png',
    // width: 462,
    // height: 462,
    name: 'Swirl Sweets',
  },
  {
    src: '/images/products/card_2.png',
    // width: 462,
    // height: 462,
    name: 'Lolly Jar',
  },
  {
    src: '/images/products/card_3.png',
    // width: 462,
    // height: 624,
    name: 'Cola Pop',
  },
  {
    src: '/images/products/card_4.png',
    // width: 462,
    // height: 624,
    name: 'Gummi Bears',
  },
  {
    src: '/images/products/card_5.png',
    // width: 462,
    // height: 462,
    name: 'Cake Pop',
  },
  {
    src: '/images/products/card_7.png',
    // width: 462,
    // height: 462,
    name: 'Chew Chew',
  },
  {
    src: '/images/products/card_6.png',
    // width: 462,
    // height: 462,
    name: 'Limey Bliss',
  },
];

export default function ProductsCard() {
  return (
    <div className={styles.cards}>
      <ul className={styles.cards__list}>
        {images.map((photo, index) => (
          <Link href="/shop">
            <li className={styles.cards__item} data-index={index} key={index}>
              <Image src={photo.src} alt={index} fill sizes="100vw" priority />
              <div className={styles.cards__name}>
                <p>{photo.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
