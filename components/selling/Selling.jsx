import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';

import SectionHeader from '../section-header/SectionHeader';
import SliderSlick from '../slider/Slider';

import styles from './selling.module.css';

export default function Selling() {
  useLayoutEffect(() => {
    gsap.to('.angel', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 3,
      delay: 2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section className={styles.selling}>
      <div className={styles.selling__wrapper}>
        <SectionHeader text="Best Sellers" />
        <SliderSlick />
      </div>

      <div className={classNames(styles.angel, 'angel')}></div>
    </section>
  );
}
