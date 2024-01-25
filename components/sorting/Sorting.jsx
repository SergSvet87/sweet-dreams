'use client';

import { useState } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import FilterSelect from './FilterSelect';
import SortSelect from './SortSelect';
import Image from 'next/image';

import styles from './sorting.module.css';

export default function Sorting() {
  const [selectedOption, setSelectedOption] = useState(null);
  const isMobile1440 = useMediaQuery(1440);

  const handleSortChange = selectedOption => {
    setSelectedOption(selectedOption);
    // додати логіку для обробки змін сортування
    // console.log('Вибраний варіант:', selectedOption);
  };

  return (
    <div className={styles.sort}>
      {isMobile1440 ? (
        <FilterSelect />
      ) : (
        <>
          <div className={styles.sort__reset}>
            <div className={styles.sort__result}>
              <span>10</span> results
            </div>

            <button className={styles.reset__btn} type="reset">
              Reset All
            </button>
          </div>

          <ul className={styles.sort__list}>
            <li className={styles.list__item}>
              Candies
              <Image width={24} height={24} src={'/images/close-modal-cross.svg'} alt="Candies" />
            </li>
          </ul>
        </>
      )}

      <SortSelect onChange={handleSortChange} />
    </div>
  );
}
