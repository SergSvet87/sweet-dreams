'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useClickOutside } from '@/hooks/useClickOutside';

import styles from './basket.module.css';

export default function Basket() {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const basketRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    // basketRef.current.style.transition = 'all 0.4s ease'
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useClickOutside(basketRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <div className={styles.basket} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href='/cart' className={styles.basket__button} onClick={() => setOpen(!isOpen)}>
        <Image
          src={isHovering ? 'images/header/basket-hover.svg' : 'images/header/cart.svg'}
          alt="Basket Icon"
          width={48}
          height={48}
          priority
        />
        <div className={styles.basket__count}>0</div>
      </Link>
    </div>
  );
}
