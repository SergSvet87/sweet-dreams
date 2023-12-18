'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useClickOutside } from '@/hooks/useClickOutside';

import styles from './basket.module.css';

export default function Basket({count}) {
  const [isOpen, setOpen] = useState(false);
  const basketRef = useRef(null);

  useClickOutside(basketRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <div className={styles.basket} >
      <Link href='/cart' className={styles.basket__button} onClick={() => setOpen(!isOpen)}>
        <Image
          src='/images/header/cart.svg'
          alt="Basket Icon"
          width={48}
          height={48}
          priority
        />
        <div className={styles.basket__count}>{count}</div>
      </Link>
    </div>
  );
}
