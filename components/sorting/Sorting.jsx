'use client';

import { useState } from 'react';
import classNames from 'classnames';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import FilterSelect from './FilterSelect';
import SortSelect from './SortSelect';
import Filters from '../filters/Filters';

import styles from './sorting.module.css';

export default function Sorting() {
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

            <button className={styles.reset__btn} type="reset">
              Reset All
            </button>
          </div>

          <ul className={styles.sort__list}>
            <li className={styles.list__item}>
              Candies
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3002 5.70998C18.2077 5.61728 18.0978 5.54373 17.9768 5.49355C17.8559 5.44337 17.7262 5.41754 17.5952 5.41754C17.4643 5.41754 17.3346 5.44337 17.2136 5.49355C17.0926 5.54373 16.9827 5.61728 16.8902 5.70998L12.0002 10.59L7.11022 5.69998C7.01764 5.6074 6.90773 5.53396 6.78677 5.48385C6.6658 5.43375 6.53615 5.40796 6.40522 5.40796C6.27429 5.40796 6.14464 5.43375 6.02368 5.48385C5.90272 5.53396 5.79281 5.6074 5.70022 5.69998C5.60764 5.79256 5.5342 5.90247 5.4841 6.02344C5.43399 6.1444 5.4082 6.27405 5.4082 6.40498C5.4082 6.53591 5.43399 6.66556 5.4841 6.78652C5.5342 6.90749 5.60764 7.0174 5.70022 7.10998L10.5902 12L5.70022 16.89C5.60764 16.9826 5.5342 17.0925 5.4841 17.2134C5.43399 17.3344 5.4082 17.464 5.4082 17.595C5.4082 17.7259 5.43399 17.8556 5.4841 17.9765C5.5342 18.0975 5.60764 18.2074 5.70022 18.3C5.79281 18.3926 5.90272 18.466 6.02368 18.5161C6.14464 18.5662 6.27429 18.592 6.40522 18.592C6.53615 18.592 6.6658 18.5662 6.78677 18.5161C6.90773 18.466 7.01764 18.3926 7.11022 18.3L12.0002 13.41L16.8902 18.3C16.9828 18.3926 17.0927 18.466 17.2137 18.5161C17.3346 18.5662 17.4643 18.592 17.5952 18.592C17.7262 18.592 17.8558 18.5662 17.9768 18.5161C18.0977 18.466 18.2076 18.3926 18.3002 18.3C18.3928 18.2074 18.4662 18.0975 18.5163 17.9765C18.5665 17.8556 18.5922 17.7259 18.5922 17.595C18.5922 17.464 18.5665 17.3344 18.5163 17.2134C18.4662 17.0925 18.3928 16.9826 18.3002 16.89L13.4102 12L18.3002 7.10998C18.6802 6.72998 18.6802 6.08998 18.3002 5.70998Z"
                  fill="#131313"
                />
              </svg>
            </li>
          </ul>
        </>
      )}

      <SortSelect onChange={handleSortChange} />
    </div>
  );
}
