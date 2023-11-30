import React from 'react';
import classNames from 'classnames';

// import useUsersStore from '@/store/users/index';
import Banner from '@/components/banner/Banner';
import Search from '@/components/search/Search';
import Catalog from '@/components/catalog/Catalog';

import styles from './shop.module.css';
import Filters from '@/components/filters/Filters.jsx';
import Sorting from '@/components/sorting/Sorting.jsx';

export default function Shop() {
  return (
    <div className={styles.shop}>
      <Banner />
      <div className={classNames('shop__container')}>
        <Search />
        <Sorting />
        <div className={styles.shop__content}>
          <Filters />
          <Catalog />
        </div>
      </div>
    </div>
  );
}
