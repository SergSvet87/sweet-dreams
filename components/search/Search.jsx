'use client';

import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import styles from './search.module.css';

export default function Search() {
  const [textSearch, setTextSearch] = useState('');
  // const [closeShow, setCloseShow] = useState(false);
  const closeBtnRef = useRef(null);
  const isMobile744 = useMediaQuery(744);

  function handleChange(e) {
    setTextSearch(e.target.value);
    // setCloseShow(true);
    closeBtnRef.current.style.opacity = '1';

    if (e.target.value === '') {
      closeBtnRef.current.style.opacity = '0';
    }
  }

  function handleClose() {
    setTextSearch('');
    closeBtnRef.current.style.opacity = '0';
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    setTextSearch(e.target.value);
    e.target.value = '';
  }

  return (
    <div className={styles.search}>
      <div className="search__container">
        <form onSubmit={onSubmitHandler} className={styles.search__form}>
          <label className={styles.search__label}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.99961 2.5C11.3976 2.49994 12.7678 2.89061 13.9555 3.62792C15.1432 4.36523 16.1012 5.41983 16.7214 6.6727C17.3416 7.92558 17.5993 9.32686 17.4654 10.7184C17.3315 12.11 16.8113 13.4364 15.9636 14.548L20.7066 19.293C20.886 19.473 20.9901 19.7144 20.9978 19.9684C21.0056 20.2223 20.9164 20.4697 20.7484 20.6603C20.5803 20.8508 20.3461 20.9703 20.0931 20.9944C19.8402 21.0185 19.5876 20.9454 19.3866 20.79L19.2926 20.707L14.5476 15.964C13.6006 16.6861 12.4953 17.1723 11.323 17.3824C10.1508 17.5925 8.94543 17.5204 7.80661 17.1721C6.66778 16.8238 5.62826 16.2094 4.77406 15.3795C3.91986 14.5497 3.27555 13.5285 2.89443 12.4002C2.51332 11.2719 2.40636 10.0691 2.5824 8.89131C2.75844 7.7135 3.21243 6.59454 3.9068 5.62703C4.60117 4.65951 5.51595 3.87126 6.57545 3.32749C7.63495 2.78372 8.80871 2.50006 9.99961 2.5ZM9.99961 4.5C8.54091 4.5 7.14197 5.07946 6.11052 6.11091C5.07907 7.14236 4.49961 8.54131 4.49961 10C4.49961 11.4587 5.07907 12.8576 6.11052 13.8891C7.14197 14.9205 8.54091 15.5 9.99961 15.5C11.4583 15.5 12.8572 14.9205 13.8887 13.8891C14.9201 12.8576 15.4996 11.4587 15.4996 10C15.4996 8.54131 14.9201 7.14236 13.8887 6.11091C12.8572 5.07946 11.4583 4.5 9.99961 4.5Z"
                fill="#131313"
              />
            </svg>
            <input
              className={styles.search__input}
              id="search"
              type="text"
              name="Search"
              placeholder="Search"
              value={textSearch}
              onChange={handleChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.search__close}
              ref={closeBtnRef}
              onClick={handleClose}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.3002 5.70998C18.2077 5.61728 18.0978 5.54373 17.9768 5.49355C17.8559 5.44337 17.7262 5.41754 17.5952 5.41754C17.4643 5.41754 17.3346 5.44337 17.2136 5.49355C17.0926 5.54373 16.9827 5.61728 16.8902 5.70998L12.0002 10.59L7.11022 5.69998C7.01764 5.6074 6.90773 5.53396 6.78677 5.48385C6.6658 5.43375 6.53615 5.40796 6.40522 5.40796C6.27429 5.40796 6.14464 5.43375 6.02368 5.48385C5.90272 5.53396 5.79281 5.6074 5.70022 5.69998C5.60764 5.79256 5.5342 5.90247 5.4841 6.02344C5.43399 6.1444 5.4082 6.27405 5.4082 6.40498C5.4082 6.53591 5.43399 6.66556 5.4841 6.78652C5.5342 6.90749 5.60764 7.0174 5.70022 7.10998L10.5902 12L5.70022 16.89C5.60764 16.9826 5.5342 17.0925 5.4841 17.2134C5.43399 17.3344 5.4082 17.464 5.4082 17.595C5.4082 17.7259 5.43399 17.8556 5.4841 17.9765C5.5342 18.0975 5.60764 18.2074 5.70022 18.3C5.79281 18.3926 5.90272 18.466 6.02368 18.5161C6.14464 18.5662 6.27429 18.592 6.40522 18.592C6.53615 18.592 6.6658 18.5662 6.78677 18.5161C6.90773 18.466 7.01764 18.3926 7.11022 18.3L12.0002 13.41L16.8902 18.3C16.9828 18.3926 17.0927 18.466 17.2137 18.5161C17.3346 18.5662 17.4643 18.592 17.5952 18.592C17.7262 18.592 17.8558 18.5662 17.9768 18.5161C18.0977 18.466 18.2076 18.3926 18.3002 18.3C18.3928 18.2074 18.4662 18.0975 18.5163 17.9765C18.5665 17.8556 18.5922 17.7259 18.5922 17.595C18.5922 17.464 18.5665 17.3344 18.5163 17.2134C18.4662 17.0925 18.3928 16.9826 18.3002 16.89L13.4102 12L18.3002 7.10998C18.6802 6.72998 18.6802 6.08998 18.3002 5.70998Z"
                fill="#131313"
              />
            </svg>
          </label>

          <button className={styles.search__btn} type="submit">
            {isMobile744 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.99961 2.5C11.3976 2.49994 12.7678 2.89061 13.9555 3.62792C15.1432 4.36523 16.1012 5.41983 16.7214 6.6727C17.3416 7.92558 17.5993 9.32686 17.4654 10.7184C17.3315 12.11 16.8113 13.4364 15.9636 14.548L20.7066 19.293C20.886 19.473 20.9901 19.7144 20.9978 19.9684C21.0056 20.2223 20.9164 20.4697 20.7484 20.6603C20.5803 20.8508 20.3461 20.9703 20.0931 20.9944C19.8402 21.0185 19.5876 20.9454 19.3866 20.79L19.2926 20.707L14.5476 15.964C13.6006 16.6861 12.4953 17.1723 11.323 17.3824C10.1508 17.5925 8.94543 17.5204 7.80661 17.1721C6.66778 16.8238 5.62826 16.2094 4.77406 15.3795C3.91986 14.5497 3.27555 13.5285 2.89443 12.4002C2.51332 11.2719 2.40636 10.0691 2.5824 8.89131C2.75844 7.7135 3.21243 6.59454 3.9068 5.62703C4.60117 4.65951 5.51595 3.87126 6.57545 3.32749C7.63495 2.78372 8.80871 2.50006 9.99961 2.5ZM9.99961 4.5C8.54091 4.5 7.14197 5.07946 6.11052 6.11091C5.07907 7.14236 4.49961 8.54131 4.49961 10C4.49961 11.4587 5.07907 12.8576 6.11052 13.8891C7.14197 14.9205 8.54091 15.5 9.99961 15.5C11.4583 15.5 12.8572 14.9205 13.8887 13.8891C14.9201 12.8576 15.4996 11.4587 15.4996 10C15.4996 8.54131 14.9201 7.14236 13.8887 6.11091C12.8572 5.07946 11.4583 4.5 9.99961 4.5Z"
                  fill="white"
                />
              </svg>
            ) : (
              'Search'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
