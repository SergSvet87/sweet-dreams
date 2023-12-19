import { Splide, SplideSlide } from '@splidejs/react-splide';

import ProductCard from '../product-card/ProductCard';
import SliderArrows from '../slider-arrows/SliderArrows';

import '@splidejs/react-splide/css';
import styles from './like.module.css';

export default function Like({ products }) {
  return (
    <section className={styles.like}>
      <div className="like__container">
        <h2 className={styles.like__title}>You may also like</h2>

        <Splide
          className={styles.like__slider}
          aria-label="You may also like"
          options={{
            rewind: true,
            width: 1600,
            gap: '38px',
            type: 'loop',
            perPage: 4,
            breakpoints: {
              744: {
                perPage: 3,
              },
              480: {
                perPage: 2,
              },
            },
          }}>
          {products.length &&
            products.map((item) => (
              <SplideSlide key={item.id} className={styles.like__slide}>
                <ProductCard item={item} />
              </SplideSlide>
            ))}

          <SliderArrows />
        </Splide>
      </div>
    </section>
  );
}
