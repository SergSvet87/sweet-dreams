'use client';

import { useState } from 'react';

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
              name='type'
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
              name='specifications'
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
              className={styles.checkbox__input}
              type="checkbox"
              onChange={toggleAcceptWithRules}
              aria-label="rating"
              name='rating'
            />
            <span className={styles.checkbox__span} />
            <span className={styles.checkbox__text}>Rating</span>
          </label>
      </div>

      <div className={styles.filters__item}>
        <h3 className={styles.filters__title}>Price</h3>

        {price.map((item) => (
          <label className={styles.filters__checkbox} key={item.id}>
            <input
              className={styles.checkbox__input}
              type="checkbox"
              onChange={toggleAcceptWithRules}
              aria-label={item.type}
              name='price'
            />
            <span className={styles.checkbox__span} />
            <span className={styles.checkbox__text}>{item.type}</span>
          </label>
        ))}


      </div>
      {/* <div className={styles.filters__boiler_manufacturers}>
        <FilterManufacturerAccordion
          manufacturersList={boilerManufacturers}
          title="Производитель котлов"
          updateManufacturer={updateBoilerManufacturer}
          setManufacturer={setBoilerManufacturers}
        />
      </div>
      <div className={styles.filters__price}>
        <Accordion
          title="Цена"
          titleClass={`${styles.filters__manufacturer__btn} ${darkModeClass}`}
          arrowOpenClass={styles.open}
        >
          <div className={styles.filters__manufacturer__inner}>
            <PriceRange
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              setIsPriceRangeChanged={setIsPriceRangeChanged}
            />
            <div style={{ height: 24 }} />
          </div>
        </Accordion>
      </div>
      <div className={styles.filters__boiler_manufacturers}>
        <FilterManufacturerAccordion
          manufacturersList={partsManufacturers}
          title="Производитель запчастей"
          updateManufacturer={updatePartsManufacturer}
          setManufacturer={setPartsManufacturers}
        />
      </div>
      <div className={styles.filters__actions}>
        <button
          className={styles.filters__actions__show}
          disabled={spinner || resetFilterBtnDisabled}
          onClick={applyFilters}
        >
          {spinner ? (
            <span
              className={spinnerStyles.spinner}
              style={{ top: 6, left: '47%' }}
            />
          ) : (
            'Показать'
          )}
        </button>
        <button
          className={styles.filters__actions__reset}
          disabled={resetFilterBtnDisabled}
          onClick={resetFilters}
        >
          Сбросить
        </button>
      </div> */}
    </>
  );
}
