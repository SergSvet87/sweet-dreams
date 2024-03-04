'use client';

import classNames from 'classnames';

// import useUsersStore from '@/store/users/index';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Banner from '@/components/banner/Banner';
import Search from '@/components/search/Search';
import Catalog from '@/components/catalog/Catalog';
import Filters from '@/components/filters/Filters';
import Sorting from '@/components/sorting/Sorting';

import styles from './shop.module.css';
import { useEffect, useState } from 'react';
import { getAllProduct } from '@utils/product';

export default function Shop() {
  const isMobile1440 = useMediaQuery(1440);
  const [products, setProducts] = useState();
  const [filtred, setFiltred] = useState();
  const [filterReset, setFilterReset] = useState(false);

  useEffect(() => {
    (async () => {
      const allProducts = await getAllProduct();
      setProducts(allProducts.data);
    })();
  }, []);

  const changeReset = () => {
    setFilterReset(false);
  };

  const getFilter = data => {
    changeReset();
    const keys = Object.keys(data);
    const filtred = keys.filter(item => data[item] === true);
    setFiltred(filtred);
  };

  const reset = () => {
    setFiltred([]);
    setFilterReset(true);
  };

  return (
    <>
      <Search />

      <Banner />

      <div className={styles.shop}>
        <div className={classNames('shop__container')}>
          <Sorting reset={reset} filtred={filtred} />

          <div className={styles.shop__content}>
            {isMobile1440 ? null : (
              <Filters set={changeReset} reset={filterReset} getFilter={getFilter} />
            )}

            <Catalog allProducts={products} />
          </div>
        </div>
      </div>
    </>
  );
}
