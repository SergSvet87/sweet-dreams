'use client';

import { useState } from 'react';
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
    type: 'Dairy free',
  },
  {
    id: 2,
    type: 'Gluten free',
  },
  {
    id: 3,
    type: 'Vegetarian',
  },
];

const price = [
  {
    id: 1,
    type: 'Under ₴200',
  },
  {
    id: 2,
    type: ' ₴200 - ₴600',
  },
  {
    id: 3,
    type: 'Over ₴600',
  },
];

export default function FiltersDesktop() {
  const [acceptWithRules, setAcceptWithRules] = useState(false);

  const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  return (
    <>
      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Type</h3>

        {categories.map((item) => (
          <label className={styles.filters__checkbox} key={item.id}>
            <input
              className={styles.checkbox__input}
              type="checkbox"
              onChange={toggleAcceptWithRules}
              aria-label={item.type}
              name="type"
            />
            <span className={styles.checkbox__span} />
            <span className={styles.checkbox__text}>{item.type}</span>
          </label>
        ))}
      </div>

      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Food Specifications</h3>

        {specifications.map((item) => (
          <label className={styles.filters__checkbox} key={item.id}>
            <input
              className={styles.checkbox__input}
              type="checkbox"
              onChange={toggleAcceptWithRules}
              aria-label={item.type}
              name="specifications"
            />
            <span className={styles.checkbox__span} />
            <span className={styles.checkbox__text}>{item.type}</span>
          </label>
        ))}
      </div>

      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Rating</h3>

        <label className={styles.filters__checkbox}>
          <input
            className={styles.rating__input}
            type="checkbox"
            onChange={toggleAcceptWithRules}
            name="rating"
          />
          <span className={classNames(styles.rating__span, styles.rating__span_5)} />
        </label>

        <label className={styles.filters__checkbox}>
          <input
            className={styles.rating__input}
            type="checkbox"
            onChange={toggleAcceptWithRules}
            name="rating"
          />
          <span className={classNames(styles.rating__span, styles.rating__span_4)} />
        </label>

        <label className={styles.filters__checkbox}>
          <input
            className={styles.rating__input}
            type="checkbox"
            onChange={toggleAcceptWithRules}
            name="rating"
          />
          <span className={classNames(styles.rating__span, styles.rating__span_3)} />
        </label>

        <label className={styles.filters__checkbox}>
          <input
            className={styles.rating__input}
            type="checkbox"
            onChange={toggleAcceptWithRules}
            name="rating"
          />
          <span className={classNames(styles.rating__span, styles.rating__span_2)} />
        </label>

        <label className={styles.filters__checkbox}>
          <input
            className={styles.rating__input}
            type="checkbox"
            onChange={toggleAcceptWithRules}
            name="rating"
          />
          <span className={classNames(styles.rating__span, styles.rating__span_1)} />
        </label>
      </div>

      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Price</h3>

        {price.map((item) => (
          <label className={styles.filters__checkbox} key={item.id}>
            <input
              className={styles.checkbox__input}
              type="radio"
              onChange={toggleAcceptWithRules}
              aria-label={item.type}
              name="price"
            />
            <span className={styles.checkbox__span} />
            <span className={styles.checkbox__text}>{item.type}</span>
          </label>
        ))}

        <PriceRange />
      </div>
    </>
  );
}
