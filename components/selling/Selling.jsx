import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SectionHeader from '../section-header/SectionHeader';

import styles from './selling.module.css';
// import './slider.css';
// ss
import 'swiper/css';
import './swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    title: 'Mickey Mouse 5',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 6,
    image: '/images/sellers/card3.png',
    title: 'Mickey Mouse 6',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 7,
    image: '/images/sellers/card2.png',
    title: 'Mickey Mouse 7',
    count: 'Box of 10',
    price: '₴350',
  },
  {
    id: 8,
    image: '/images/sellers/card1.png',
    title: 'Mickey Mouse 8',
    count: 'Box of 10',
    price: '₴350',
  },
];

export default function Selling() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <>
      <SectionHeader />
      <section className={styles.selling}>
        <div className={styles.selling__wrapper}>
          <Swiper
            effect={'creative'}
            speed={800}
            watchOverflow={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={198}
            slidesPerView={3}
            centeredSlides={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            pagination={{ clickable: true }}
            onSlideChange={swiper => {
              console.log(swiper.activeIndex);
              setActiveSlideIndex(swiper.activeIndex);
            }}
          >
            {data.length &&
              data.map(item => (
                <SwiperSlide key={item.id} className="sellers__slide">
                  <div
                    className={styles.sellers_img}
                    onClick={() => console.log(item.title, item.id, activeSlideIndex + 1)}
                  >
                    <div
                      className={
                        item.id === activeSlideIndex + 1
                          ? styles.sellers__img_container_active
                          : styles.sellers__img_container
                      }
                    >
                      <Image src={item.image} alt={item.title} width={500} height={251} />
                    </div>
                    <div className={styles.sellers__container}>
                      <h2
                        className={
                          item.id === activeSlideIndex + 1
                            ? styles.sellers__title_active
                            : styles.sellers__title
                        }
                      >
                        {item.title}
                      </h2>
                      <p
                        className={
                          item.id === activeSlideIndex + 1
                            ? styles.sellers__count_active
                            : styles.sellers__count
                        }
                      >
                        {item.count}
                      </p>
                      <p
                        className={
                          item.id === activeSlideIndex + 1
                            ? styles.sellers__price_active
                            : styles.sellers__price
                        }
                      >
                        {item.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            <div className={styles.pagination}></div>

            <div className="swiper-button-prev">
              <Image src="images/arrow-right.svg" width={70} height={70} />
            </div>
            <div className="swiper-button-next">
              <Image src="images/arrow-right.svg" width={70} height={70} />
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
