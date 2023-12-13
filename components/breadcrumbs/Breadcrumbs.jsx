import React from 'react';
import { BsHouse } from 'react-icons/bs';
import Link from 'next/link';

import styles from './breadcrumbs.module.css';

export default function Breadcrumbs() {
  return (
    <div className={styles.breadcrumb}>
      <div className="breadcrumb__container">
        <div className={styles.breadcrumb__link}>
          <Link href="/">
            <BsHouse /> /
          </Link>
          <span>Lollies /</span>
          <span>Candy bird</span>
        </div>
      </div>
    </div>
  );
}
