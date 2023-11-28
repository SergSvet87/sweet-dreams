'use client';

import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';

import styles from './section-header.module.css';

export default function SectionHeader({ text }) {
  useLayoutEffect(() => {
    gsap.from('.arrows', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 6,
      delay: 2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <h2 className={styles.title}>
      <span className={classNames(styles.title__arrows, 'arrows')} />
      <span className={styles.title__text}>{text}</span>
    </h2>
  );
}
