import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './payment.module.css';

export default function Payment() {
  return (
    <div className={styles.payment__content}>
      <Link href="#">
        <Image width={42} height={42} src="/images/payment/visa.svg" alt="Visa icon" priority />
      </Link>
      <Link href="#">
        <Image
          width={41}
          height={31}
          src="/images/payment/mastercard.svg"
          alt="Mastercard icon"
          priority
        />
      </Link>
    </div>
  );
}
