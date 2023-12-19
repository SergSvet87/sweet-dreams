'use client';

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Search from '@/components/search/Search';
import SingleProduct from '@/components/single-product/SingleProduct';
import Like from '@/components/like/Like';

import styles from './product.module.css';

import useSWR from 'swr';
import { fetcher } from '@/utils/client';
import { products } from '@/components/catalog/Catalog';

// export const metadata = {
//   title: 'Продукт',
// };

export default async function Product({ params }) {
  const { id } = params;

  const data = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}product/${id}`, fetcher);
  const product = data.data;

  return (
    <div className={styles.product}>
      <Search />
      <Breadcrumbs />

      <SingleProduct item={product} />

      <Like products={products} />
    </div>
  );
}
