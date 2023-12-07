
'use client';

import { useEffect, useState } from 'react';
import Select from 'react-select';

import { controlStyles, menuStyles, selectStyles, optionStyles } from './select.js';

const FilterSelect = () => {
  const [categoryOption, setCategoryOption] = useState(null);

  const options = [
    { value: 'best sellers', label: 'Best Sellers' },
    { value: 'cheap', label: 'Cheap' },
    { value: 'expensive', label: 'Expensive' },
    { value: 'popular', label: 'Popular' },
  ];
  
  return (
    <Select
      options={options}
      placeholder="Sorting..."
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
