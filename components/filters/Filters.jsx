import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import FiltersMobile from './FiltersMobile';
import FiltersDesktop from './FiltersDesktop';

import styles from './filters.module.css';

export default function Filters() {
  // const isMobile = useMediaQuery(744);

  return (
    <aside className={styles.filters}>
      {/* {isMobile ? ( */}
        {/* <FiltersMobile
          // closePopup={closePopup}
          // spinner={spinner}
          // applyFilters={applyFilters}
          // priceRange={priceRange}
          // setIsPriceRangeChanged={setIsPriceRangeChanged}
          // setPriceRange={setPriceRange}
          // resetFilterBtnDisabled={resetFilterBtnDisabled}
          // resetFilters={resetFilters}
          // filtersMobileOpen={filtersMobileOpen}
        />
      ) : ( */}
        <FiltersDesktop />
      {/* )} */}
    </aside>
  );
}
