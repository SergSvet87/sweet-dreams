import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import FiltersMobile from './FiltersMobile';
import FiltersDesktop from './FiltersDesktop';

import styles from './filters.module.css';

export default function Filters() {
  return (
    <aside className={styles.filters}>
      <FiltersDesktop />
    </aside>
  );
}
