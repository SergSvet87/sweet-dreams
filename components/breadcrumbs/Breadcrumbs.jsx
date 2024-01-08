import React from 'react';
import { BsHouse } from 'react-icons/bs';
import Link from 'next/link';

import styles from './breadcrumbs.module.css';

export default function Breadcrumbs() {
  return (
    <div className={styles.breadcrumb}>
      <div className="breadcrumb__container">
        <div className={styles.breadcrumb__links}>
          <Link className={styles.breadcrumb__home} href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M13.207 3.4985C12.8647 3.22388 12.439 3.07422 12.0001 3.07422C11.5613 3.07422 11.1356 3.22388 10.7933 3.4985L4.15043 8.82736C3.92518 9.00807 3.74339 9.23705 3.61848 9.49742C3.49356 9.75778 3.42871 10.0429 3.42871 10.3316V20.0002C3.42871 20.5117 3.6319 21.0022 3.99358 21.3639C4.35525 21.7256 4.84579 21.9288 5.35728 21.9288H7.50014C8.01163 21.9288 8.50217 21.7256 8.86384 21.3639C9.22552 21.0022 9.42871 20.5117 9.42871 20.0002V15.2859C9.42871 14.6945 9.90871 14.2145 10.5001 14.2145H13.5001C14.0916 14.2145 14.5716 14.6945 14.5716 15.2859V20.0002C14.5716 20.5117 14.7748 21.0022 15.1364 21.3639C15.4981 21.7256 15.9886 21.9288 16.5001 21.9288H18.643C19.1545 21.9288 19.645 21.7256 20.0067 21.3639C20.3684 21.0022 20.5716 20.5117 20.5716 20.0002V10.3316C20.5716 10.0429 20.5067 9.75778 20.3818 9.49742C20.2569 9.23705 20.0751 9.00807 19.8499 8.82736L13.207 3.4985Z"
                fill="#131313"
              />
            </svg>
          </Link>
          <span>/</span>
          <Link className={styles.breadcrumb__shop} href="/shop">
            Lollies
          </Link>
          <span>/</span>
          Candy bird
        </div>
      </div>
    </div>
  );
}
