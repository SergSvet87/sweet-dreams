'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';

import PriceRange from '../price-range/PriceRange';

import styles from './filters.module.css';

const categories = [
  {
    id: 1,
    type: 'candies',
  },
  {
    id: 2,
    type: 'lollies',
  },
  {
    id: 3,
    type: 'chewies',
  },
  {
    id: 4,
    type: 'jellies',
  },
  {
    id: 5,
    type: 'chocolates',
  },
];

const specifications = [
  {
    id: 1,
    type: 'dairy free',
  },
  {
    id: 2,
    type: 'gluten free',
  },
  {
    id: 3,
    type: 'vegetarian',
  },
];

const price = [
  {
    id: 1,
    type: 'under ₴200',
  },
  {
    id: 2,
    type: '₴200 - ₴600',
  },
  {
    id: 3,
    type: 'over ₴600',
  },
];

const stars = [
  {
    id: 5,
    type: 'rating__span_5',
  },
  {
    id: 4,
    type: 'rating__span_4',
  },
  {
    id: 3,
    type: 'rating__span_3',
  },
  {
    id: 2,
    type: 'rating__span_2',
  },
  {
    id: 1,
    type: 'rating__span_1',
  },
];

const initialState = {
  candies: false,
  lollies: false,
  chewies: false,
  jellies: false,
  chocolates: false,
  dairyfree: false,
  glutenfree: false,
  vegetarian: false,
  5: false,
  4: false,
  3: false,
  2: false,
  1: false,
  'under₴200': false,
  '₴200-₴600': false,
  'over₴600': false,
};

export default function FiltersDesktop({ getFilter, reset, set }) {
  const [acceptWithRules, setAcceptWithRules] = useState(false);
  const [filterParam, setFilterParam] = useState({ ...initialState });
  const [isChecked, setIsChecked] = useState({ ...initialState });
  const [priceRange, setPriceRange] = useState();

  useEffect(() => {
    if (reset) {
      setIsChecked({ ...initialState });
      setFilterParam({ ...initialState });
      set();
      return;
    }
    if (priceRange) {
      getFilter({ ...filterParam, from: priceRange[0] || 0, to: priceRange[1] || 0 });
    }
  }, [reset, priceRange]);

  const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  const getPriceRange = data => {
    console.log('data', data);
    setPriceRange(data);
  };

  const handleChange = e => {
    const { name, checked } = e.currentTarget;
    const aria = e.currentTarget.getAttribute('data-name');
    filterParam[name] = checked;
    isChecked[name.split(' ').join('')] = checked;
    if (priceRange) {
      getFilter({ ...filterParam, from: priceRange[0] || 0, to: priceRange[1] || 0 });
      return;
    }
    getFilter({ ...filterParam });
  };

  console.log('qwe', isChecked);

  return (
    <>
      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Type</h3>

        {categories.map(item => (
          <label className={styles.filters__checkbox} key={item.id}>
            <input
              className={styles.checkbox__input}
              type="checkbox"
              onChange={handleChange}
              aria-label={item.type}
              name={item.type}
              value={filterParam[item.type]}
              checked={isChecked[item.type]}
            />
            <span className={styles.checkbox__span} />
            <span className={styles.checkbox__text}>{item.type}</span>
          </label>
        ))}
      </div>

      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Food Specifications</h3>

        {specifications.map(item => (
          <label className={styles.filters__checkbox} key={item.id}>
            <input
              className={styles.checkbox__input}
              type="checkbox"
              onChange={handleChange}
              aria-label={item.type}
              name={item.type}
              value={filterParam[item.type]}
              checked={isChecked[item.type.split(' ').join('')]}
            />
            <span className={styles.checkbox__span} />
            <span className={styles.checkbox__text}>{item.type}</span>
          </label>
        ))}
      </div>

      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Rating</h3>

        {stars.map(item => (
          <label key={item.id} className={styles.filters__checkbox}>
            <input
              className={styles.rating__input}
              type="checkbox"
              onChange={handleChange}
              name={item.id}
              checked={isChecked[item.id]}
            />
            <span className={classNames(`${styles.rating__span} ${styles[item.type]}`)} />
          </label>
        ))}
      </div>

      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Price</h3>

        {price.map(item => (
          <label className={styles.filters__checkbox} key={item.id}>
            <input
              className={styles.checkbox__input}
              type="checkbox"
              onChange={handleChange}
              aria-label={item.type}
              name={item.type}
              checked={isChecked[item.type.split(' ').join('')]}
            />
            <span className={styles.checkbox__span} />
            <span className={styles.checkbox__text}>{item.type}</span>
          </label>
        ))}

        <PriceRange reset={reset} getPriceRange={getPriceRange} />
      </div>
    </>
  );
}
