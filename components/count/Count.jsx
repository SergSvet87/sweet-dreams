import React from 'react';

import useCounterStore from '@/store/count/index';

import styles from './count.module.css';

export const Count = ({ count, id }) => {
  const controls = useCounterStore(({controls}) => controls);
  const num = useCounterStore(({count}) => count);

  return (
    <div className={styles.count}>
      <button
        className={styles.minus}
        onClick={controls.decrement}
        disabled={num === 1}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.85 11H18.15C18.6194 11 19 10.5523 19 10C19 9.44772 18.6194 9 18.15 9H2.85C2.38056 9 2 9.44772 2 10C2 10.5523 2.38056 11 2.85 11Z"
            fill="#131313"
          />
        </svg>
      </button>
      <span className={styles.amount}>{num}</span>
      <button
        className={styles.plus}
        onClick={controls.increment}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.65 9.65V2.85C9.65 2.38056 10.0306 2 10.5 2C10.9694 2 11.35 2.38056 11.35 2.85V9.65H18.15C18.6194 9.65 19 10.0306 19 10.5C19 10.9694 18.6194 11.35 18.15 11.35H11.35V18.15C11.35 18.6194 10.9694 19 10.5 19C10.0306 19 9.65 18.6194 9.65 18.15V11.35H2.85C2.38056 11.35 2 10.9694 2 10.5C2 10.0306 2.38056 9.65 2.85 9.65H9.65Z"
            fill="#131313"
          />
        </svg>
      </button>
    </div>
  );
};
