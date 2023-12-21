import { Splide, SplideSlide } from '@splidejs/react-splide';

import ProductCard from '../product-card/ProductCard';

import '@splidejs/react-splide/css';
import './like.css';

export default function Like({ products }) {
  return (
    <section className="like">
        <h2 className="like__title">You may also like</h2>

        <Splide
          className="like__slider"
          aria-label="You may also like"
          options={{
            rewind: true,
            speed: 1200,
            width: 1200,
            arrows: true,
            pagination: false,
            gap: '3rem',
            type: 'loop',
            perPage: 4,
            perMove: 1,
            arrowPath: 'none',
            breakpoints: {
              1920: {
                width: 896,
                perPage: 3,
              },
              744: {
                width: 492,
                perPage: 1,
              },
            },
          }}>
          {products.length &&
            products.map((item) => (
              <SplideSlide key={item.id} className="like__slide">
                <ProductCard item={item} />
              </SplideSlide>
            ))}
        </Splide>
    </section>
  );
}
