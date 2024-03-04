'use client';

import { useState } from 'react';
import classNames from 'classnames';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import FilterSelect from './FilterSelect';
import SortSelect from './SortSelect';
import Image from 'next/image';

import styles from './sorting.module.css';

export default function Sorting({ filtred, reset }) {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const isMobile1440 = useMediaQuery(1440);

  const handleSortChange = selectedOption => {
    setSelectedOption(selectedOption);
    // додати логіку для обробки змін сортування
    // console.log('Вибраний варіант:', selectedOption);
  };

  const handleOpenFilters = () => {
    setIsActive(!isActive);
    setOpenModal(!isOpenModal);
  };

  return (
    <div className={styles.sort}>
      {isMobile1440 ? (
        <>
          <button
            id="openFilters"
            className={classNames(styles.sort__filter, isActive ? 'active' : '')}
            onClick={handleOpenFilters}
          >
            Filters
            <svg
              className={styles.filter__svg}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.0297 8.22C13.1701 8.36062 13.249 8.55125 13.249 8.75C13.249 8.94875 13.1701 9.13937 13.0297 9.28L8.77968 13.53C8.63906 13.6704 8.44843 13.7493 8.24968 13.7493C8.05093 13.7493 7.86031 13.6704 7.71968 13.53L3.46968 9.28C3.33727 9.13774 3.26517 8.94969 3.26853 8.75537C3.27188 8.56105 3.35044 8.3756 3.48768 8.238C3.62529 8.10076 3.81074 8.0222 4.00505 8.01884C4.19937 8.01549 4.38742 8.08759 4.52968 8.22L7.49968 11.19V3.75C7.49968 3.55109 7.5787 3.36032 7.71935 3.21967C7.86001 3.07902 8.05077 3 8.24968 3C8.4486 3 8.63936 3.07902 8.78001 3.21967C8.92067 3.36032 8.99968 3.55109 8.99968 3.75V11.19L11.9697 8.22C12.1103 8.07955 12.3009 8.00066 12.4997 8.00066C12.6984 8.00066 12.8891 8.07955 13.0297 8.22Z"
                fill="#131313"
              />
            </svg>
          </button>
          <div className={classNames(styles.sort__modal, isOpenModal ? 'open' : '')}>
            {isOpenModal ? <Filters /> : ''}
          </div>
        </>
      ) : (
        <>
          <div className={styles.sort__reset}>
            <div className={styles.sort__result}>
              <span>10</span> results
            </div>

            <button onClick={() => reset()} className={styles.reset__btn} type="reset">
              Reset All
            </button>
          </div>

          <ul className={styles.sort__list}>
            {filtred?.map(item => (
              <li key={item} className={styles.list__item}>
                {item}
                <Image width={24} height={24} src={'/images/close-modal-cross.svg'} alt="Candies" />
              </li>
            ))}
          </ul>
        </>
      )}

      <SortSelect onChange={handleSortChange} />
    </div>
  );
}
