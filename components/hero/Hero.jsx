import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './hero.module.css';
import classNames from 'classnames';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={classNames('hero__container', styles.hero__content)}>
        <div className={styles.hero__image}>
          <Image
            src={'/images/hero/hero-image.png'}
            alt="Hero Image"
            width={952}
            height={911}
            priority
          />
        </div>
        <div className={styles.hero__description}>
          <h1 className={styles.hero__title}>Rainbow Heart Pops</h1>
          <Link className={styles.hero__link} href="/shop">
            shop now
          </Link>
        </div>
      </div>
    </section>
  );
}
