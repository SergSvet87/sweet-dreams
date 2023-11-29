'use client';

import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import styles from './search.module.css';

export default function Search() {
  const [textSearch, setTextSearch] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();

    setTextSearch(e.target.value);
    e.target.value = '';
  }

  return (
    <div className={styles.search}>
      <form onSubmit={onSubmitHandler} className={styles.search__form}>
        <label className={styles.search__label}>
          <BsSearch />
          <input
            className={styles.search__input}
            id="search"
            type="text"
            name="search"
            placeholder="Search"
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
          />
        </label>

        <button className={styles.search__btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
