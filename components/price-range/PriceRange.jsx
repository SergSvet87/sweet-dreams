'use client';

import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

import styles from './price-range.module.css';

const STEP = 0.1;
const MIN = 0;
const MAX = 1000;

const PriceRange = () => {
  const [priceRange, setPriceRange] = useState([100, 800]);

  const handlePriceRangeChange = (values) => {
    // setIsPriceRangeChanged(true);
    setPriceRange(values);
  };

  return (
    <div className={styles.filters__price}>
      <div className={styles.price__inputs}>
        <label className={styles.price__label}>
          <span className={styles.price__span}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.59 11H18V9H16.32C16.74 8.34 17 7.68 17 7C17 4.37 14.5 3 12 3C9.65 3 7.53 5.06 7.29 5.29L8.71 6.71C9.19 6.23 10.71 5 12 5C13.04 5 15 5.42 15 7C15 7.5 14.5 8.24 13.76 9H6V11H11.63C11.21 11.36 9.75 12.67 9.41 13H6V15H7.68C7.26 15.66 7 16.32 7 17C7 19.63 9.5 21 12 21C14.35 21 16.47 18.94 16.71 18.71L15.29 17.29C14.82 17.77 13.29 19 12 19C10.96 19 9 18.58 9 17C9 16.5 9.5 15.76 10.24 15H18V13H12.38L14.59 11Z"
                fill="#131313"
              />
            </svg>
          </span>
          <input type="text" value={Math.ceil(priceRange[0])} placeholder="Min" readOnly />
        </label>

        <label className={styles.price__label}>
          <span className={styles.price__span}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.59 11H18V9H16.32C16.74 8.34 17 7.68 17 7C17 4.37 14.5 3 12 3C9.65 3 7.53 5.06 7.29 5.29L8.71 6.71C9.19 6.23 10.71 5 12 5C13.04 5 15 5.42 15 7C15 7.5 14.5 8.24 13.76 9H6V11H11.63C11.21 11.36 9.75 12.67 9.41 13H6V15H7.68C7.26 15.66 7 16.32 7 17C7 19.63 9.5 21 12 21C14.35 21 16.47 18.94 16.71 18.71L15.29 17.29C14.82 17.77 13.29 19 12 19C10.96 19 9 18.58 9 17C9 16.5 9.5 15.76 10.24 15H18V13H12.38L14.59 11Z"
                fill="#131313"
              />
            </svg>
          </span>
          <input type="text" value={Math.ceil(priceRange[1])} placeholder="Max" readOnly />
        </label>

        <button className={styles.price__btn} type="button">Ok</button>
      </div>

      <Range
        values={priceRange}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={handlePriceRangeChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: 'auto',
              display: 'flex',
              width: '100%',
              padding: '0 10px',
            }}>
            <div
              ref={props.ref}
              style={{
                height: '4px',
                width: '100%',
                borderRadius: '50px',
                background: getTrackBackground({
                  values: priceRange,
                  colors: ['#131313', '#FCA7B5', '#131313'],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}>
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
            }}>
            <div
              style={{
                height: '12px',
                width: '12px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '3px solid #131313',
                // boxShadow: '0px 12px 8px -6px rgba(174, 181, 239, 0.2)',
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default PriceRange;
