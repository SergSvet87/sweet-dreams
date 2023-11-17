'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { useClickOutside } from '@/hooks/useClickOutside';

import styles from './basket.module.css';

export default function Basket() {
  const [isOpen, setOpen] = useState(false);
  const basketRef = useRef(null);

  useClickOutside(basketRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <div className={styles.basket}>
      <button className={styles.basket__button} onClick={() => setOpen(!isOpen)}>
        <Image src="images/basket.svg" alt="Basket Icon" width={48} height={48} priority/>
      </button>
    </div>
  );
}
