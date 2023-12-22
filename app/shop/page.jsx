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

export default function Shop() {
  const isMobile1440 = useMediaQuery(1440);

  return (
    <>
      <Search />

      <Banner />

      <div className={styles.shop}>
        <div className={classNames('shop__container')}>
          <Sorting />
          <div className={styles.shop__content}>
            {isMobile1440 ? null : <Filters />}

            <Catalog />
          </div>
        </div>
      </div>
    </>
  );
}
