'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { productRequestAsync } from '../../store/product/productSlice.js';
import ProductCard from '../product-card/ProductCard';

import styles from './catalog.module.css';

const products = [
  {
    src: '/images/products/card_1.png',
    title: 'Swirl Sweets',
    count: 'Box of 10',
    price: '₴200',
    quantity: '1',
    rating: '4',
  },
  {
    src: '/images/products/card_2.png',
    title: 'Lolly Jar',
    count: 'Box of 10',
    price: '₴200',
    quantity: '1',
    rating: '4',
  },
  {
    src: '/images/products/card_3.png',
    title: 'Cola Pop',
    count: 'Box of 10',
    price: '₴200',
    quantity: '1',
    rating: '4',
  },
  {
    src: '/images/products/card_4.png',
    title: 'Gummi Bears',
    count: 'Box of 10',
    price: '₴200',
    quantity: '1',
    rating: '4',
  },
  {
    src: '/images/products/card_5.png',
    title: 'Cake Pop',
    count: 'Box of 10',
    price: '₴200',
    quantity: '1',
    rating: '4',
  },
  {
    src: '/images/products/card_6.png',
    title: 'Limey Bliss',
    count: 'Box of 10',
    price: '₴200',
    quantity: '1',
    rating: '4',
  },
  {
    src: '/images/products/card_7.png',
    title: 'Chew Chew',
    count: 'Box of 10',
    price: '₴200',
    quantity: '1',
    rating: '4',
  },
];

export default function Catalog() {
  // const { products } = useSelector((state) => state.product);
  // const { category, activeCategory } = useSelector((state) => state.category);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (category.length) {
  //     dispatch(productRequestAsync(category[activeCategory].title));
  //   }
  // }, [category, activeCategory]);

  return (
    <div className={styles.catalog}>
      {products.length ? (
        <div className={styles.wrap_list}>
          <ul className={styles.list}>
            {products.map((item) => (
              <li key={item.id} className={styles.item}>
                <ProductCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.alert}>Товарів за заданим фільтром не має!</div>
      )}
    </div>
  );
};
