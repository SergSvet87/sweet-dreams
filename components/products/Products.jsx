import React from 'react';
import classNames from 'classnames';

import SectionHeader from '../section-header/SectionHeader';
import ProductsCard from '../products-card/ProductsCard';

import styles from './products.module.css';

export default function Products() {
  return (
    <section className={styles.products}>
      <SectionHeader text="New Products" />
      <div className={classNames(styles.products_container, 'products__container')}>
        <ProductsCard />
      </div>

      <div className={styles.products__angel1}></div>
      <div className={styles.products__angel2}></div>
      <div className={styles.products__angel3}></div>
      <div className={styles.products__candy}></div>
    </section>
  );
}
