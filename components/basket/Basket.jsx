'use client';

import { useRef, useState } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';

import styles from './basket.module.css';
import BacketMenu from '../basket-menu/BacketMenu';

export default function Basket() {
  const [isOpen, setOpen] = useState(false);
  const basketRef = useRef(null);

  useClickOutside(basketRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <div className={styles.basket}>
      <button className={styles.basket__button} onClick={() => setOpen(!isOpen)}>
        <img src="images/basket.svg" alt="Basket Icon" />
      </button>

      <BacketMenu isOpen={isOpen} setOpen={setOpen} basketRef={basketRef} />
    </div>
  );
}
