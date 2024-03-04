import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import FiltersMobile from './FiltersMobile';
import FiltersDesktop from './FiltersDesktop';

import styles from './filters.module.css';

export default function Filters({ getFilter, reset, set }) {
  return (
    <aside className={styles.filters}>
      <FiltersDesktop set={set} reset={reset} getFilter={getFilter} />
    </aside>
  );
}
