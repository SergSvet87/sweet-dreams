import { useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import classNames from 'classnames';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import SectionHeader from '../section-header/SectionHeader';

import '@splidejs/react-splide/css';
import styles from './selling.module.css';
import './slider.css';

const data = [
  {
    id: 1,
    image: '/images/sellers/card1.png',
    title: 'Mickey Mouse 1',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 2,
    image: '/images/sellers/card2.png',
    title: 'Mickey Mouse 2',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 3,
    image: '/images/sellers/card3.png',
    title: 'Mickey Mouse 3',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 4,
    image: '/images/sellers/card1.png',
    title: 'Mickey Mouse 4',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 5,
    image: '/images/sellers/card2.png',
    title: 'Mickey Mouse 2',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 6,
    image: '/images/sellers/card3.png',
    title: 'Mickey Mouse 3',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 7,
    image: '/images/sellers/card2.png',
    title: 'Mickey Mouse 2',
    count: 'Box of 10',
    price: '₴350',
  },
];

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

        <Splide
          className="sellers__slider"
          aria-label="Best Sellers"
          options={{
            rewind: true,
            speed: 1200,
            arrows: true,
            pagination: true,
            type: 'loop',
            perPage: 3,
            perMove: 1,
            focus: 1,
            arrowPath: 'none',
            breakpoints: {
              1440: {
                perPage: 2,
              },
              960: {
                perPage: 1,
                focus: 0,
              },
              744: {
                perPage: 1,
                focus: 0,
              },
            },
          }}>
          {data.length &&
            data.map((item) => (
              <SplideSlide key={item.id} className="sellers__slide">
                <Image src={item.image} alt={item.title} width={253} height={251} priority />
                <h2 className="sellers__title">{item.title}</h2>
                <p className="sellers__count">{item.count}</p>
                <p className="sellers__price">{item.price}</p>
              </SplideSlide>
            ))}
        </Splide>
      </div>

      <div className={classNames(styles.angel, 'angel')}></div>
    </section>
  );
}
