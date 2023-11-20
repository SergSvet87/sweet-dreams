import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './contacts.module.css';

export default function Contacts() {
  return (
    <>
      <h3 className={styles.contacts__title}>Contact us</h3>
      <ul className={styles.contacts__links}>
        <li className={styles.contacts__item}>
          <Link href="#">
            <Image
              width={48}
              height={48}
              src="images/contacts/facebook.svg"
              alt="Facebook icon"
              priority
            />
          </Link>
        </li>
        <li className={styles.contacts__item}>
          <Link href="#">
            <Image
              width={48}
              height={38}
              src="images/contacts/instagram.svg"
              alt="Instagram icon"
              priority
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
