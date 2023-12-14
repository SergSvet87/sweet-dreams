import React from 'react';

import { getProductId } from '@/utils/client';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Search from '@/components/search/Search';
import SingleProduct from '@/components/single-product/SingleProduct';
import Like from '@/components/like/Like';

import styles from './product.module.css';

export const metadata = {
  title: 'Продукт',
};

export default function Product({ params }) {
  const { id } = params;
  const product = getProductId(id);
  // const product = products.items.filter((item) => {
  //   return item.name.includes(id);
  // });

  return (
    <div className={styles.product}>
      <Search />
      <Breadcrumbs />

      <SingleProduct product={product} />

      <Like />
    </div>
  );
}
