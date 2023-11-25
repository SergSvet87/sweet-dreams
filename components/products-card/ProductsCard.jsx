import React from 'react';
import Image from 'next/image';

import styles from './products-card.module.css';

const photos = [
  {
    src: '/images/products/card_1.png',
    width: 464,
    height: 464,
    name: 'Swirl Sweets',
  },
  {
    src: '/images/products/card_2.png',
    width: 464,
    height: 600,
    name: 'Lolly Jar',
  },
  {
    src: '/images/products/card_3.png',
    width: 464,
    height: 824,
    name: 'Cola Pop',
  },
  {
    src: '/images/products/card_4.png',
    width: 464,
    height: 720,
    name: 'Gummi Bears',
  },
  {
    src: '/images/products/card_5.png',
    width: 464,
    height: 352,
    name: 'Cake Pop',
  },
  {
    src: '/images/products/card_6.png',
    width: 464,
    height: 352,
    name: 'Limey Bliss',
  },
  {
    src: '/images/products/card_7.png',
    width: 464,
    height: 464,
    name: 'Chew Chew',
  },
];

export default function ProductsCard() {
  return (
    <div className={styles.cards}>
      <ul className={styles.cards__list}>
        {photos.map((photo, index) => (
          <li className={styles.cards__item} data-index={index} key={index}>
            <Image src={photo.src} alt={index} width={photo.width} height={photo.height} priority />
            <div className={styles.cards__name}><p>{photo.name}</p></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
