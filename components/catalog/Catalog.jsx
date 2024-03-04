'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';

import styles from './catalog.module.css';

export const newProducts = [
  {
    id: 11,
    src: '/images/products/card_1.png',
    title: 'Swirl Sweets',
    count: 'Box of 10',
    price: '200',
    quantity: '1',
    rating: '4',
    isSale: false,
  },
  {
    id: 12,
    src: '/images/products/card_2.png',
    title: 'Lolly Jar',
    count: 'Box of 10',
    price: '200',
    quantity: '2',
    rating: '4',
    isSale: false,
  },
  {
    id: 13,
    src: '/images/products/card_3.png',
    title: 'Cola Pop',
    count: 'Box of 10',
    price: '220',
    newPrice: '200',
    quantity: '5',
    rating: '4',
    isSale: true,
  },
  {
    id: 14,
    src: '/images/products/card_4.png',
    title: 'Gummi Bears',
    count: 'Box of 10',
    price: '200',
    quantity: '3',
    rating: '4',
    isSale: false,
  },
  {
    id: 15,
    src: '/images/products/card_5.png',
    title: 'Cake Pop',
    count: 'Box of 10',
    price: '180',
    newPrice: '170',
    quantity: '4',
    rating: '4',
    isSale: true,
  },
  {
    id: 16,
    src: '/images/products/card_6.png',
    title: 'Limey Bliss',
    count: 'Box of 10',
    price: '200',
    quantity: '1',
    rating: '4',
    isSale: false,
  },
  {
    id: 17,
    src: '/images/products/card_7.png',
    title: 'Chew Chew',
    count: 'Box of 10',
    price: '200',
    newPrice: '180',
    quantity: '2',
    rating: '4',
    isSale: true,
  },
];

export default function Catalog({ allProducts }) {
  const [products, setProducts] = useState(newProducts);

  useEffect(() => {
    if (allProducts) {
      setProducts([...products, ...allProducts]);
    }
  }, [allProducts]);

  return (
    <div className={styles.catalog}>
      {products.length ? (
        <ul className={styles.catalog__list}>
          {products.map(item => (
            <li key={item.id} className={styles.catalog__item}>
              <ProductCard item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.alert}>Товарів за заданим фільтром не має!</div>
      )}
    </div>
  );
}
