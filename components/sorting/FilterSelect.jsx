'use client';

import { useEffect, useState } from 'react';
import Select, { components } from 'react-select';

import { controlStyles, menuStyles, selectStyles, optionStyles } from './select.js';

import styles from './sorting.module.css';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0302 8.22C13.1706 8.36062 13.2495 8.55125 13.2495 8.75C13.2495 8.94875 13.1706 9.13937 13.0302 9.28L8.78017 13.53C8.63955 13.6704 8.44892 13.7493 8.25017 13.7493C8.05142 13.7493 7.8608 13.6704 7.72017 13.53L3.47017 9.28C3.33776 9.13774 3.26566 8.94969 3.26902 8.75537C3.27237 8.56105 3.35093 8.3756 3.48817 8.238C3.62578 8.10076 3.81122 8.0222 4.00554 8.01884C4.19986 8.01549 4.38791 8.08759 4.53017 8.22L7.50017 11.19V3.75C7.50017 3.55109 7.57919 3.36032 7.71984 3.21967C7.86049 3.07902 8.05126 3 8.25017 3C8.44908 3 8.63985 3.07902 8.7805 3.21967C8.92115 3.36032 9.00017 3.55109 9.00017 3.75V11.19L11.9702 8.22C12.1108 8.07955 12.3014 8.00066 12.5002 8.00066C12.6989 8.00066 12.8895 8.07955 13.0302 8.22Z"
          fill="#131313"
        />
      </svg>
    </components.DropdownIndicator>
  );
};

const FilterSelect = () => {
  const [categoryOption, setCategoryOption] = useState(null);

  const options = [
    { value: 'all', label: 'All Orders' },
    { value: 'last-month', label: 'Last Month' },
    { value: '6-month', label: 'Last 6 Month' },
    { value: 'year', label: '2023' },
  ];

  return (
    <Select
      className={styles.filter__select}
      options={options}
      components={{ DropdownIndicator }}
      placeholder="Filters"
      styles={{
        ...selectStyles,
        control: (defaultStyles) => ({
          ...controlStyles(defaultStyles),
        }),
        input: (defaultStyles) => ({
          ...defaultStyles,
        }),
        menu: (defaultStyles) => ({
          ...menuStyles(defaultStyles),
          width: '175px',
        }),
        option: (defaultStyles, state) => ({
          ...optionStyles(defaultStyles, state),
        }),
      }}
      isSearchable={false}
    />
  );
};

export default FilterSelect;
