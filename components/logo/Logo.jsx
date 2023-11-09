'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './logo.module.css';

export default function Logo() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={styles.logo} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href="/">
        <Image
          width={120}
          height={106}
          src={isHovering ? 'images/logo-hover.svg' : 'images/logo.svg'}
          alt="Logo icon"
          priority
        />
      </Link>
    </div>
  );
}
