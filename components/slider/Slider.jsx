'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y } from 'swiper/modules';
import classNames from 'classnames';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
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
];

function PrevArrow({ className, style, onClick }) {
  return (
    <button
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="100"
          y="100"
          width="100"
          height="100"
          rx="50"
          transform="rotate(-180 100 100)"
          fill="#FFC06D"
        />
        <path
          d="M48.625 81.4375C47.7461 82.3153 46.5547 82.8084 45.3125 82.8084C44.0703 82.8084 42.8789 82.3153 42 81.4375L15.4375 54.875C14.5597 53.9961 14.0666 52.8047 14.0666 51.5625C14.0666 50.3203 14.5597 49.1289 15.4375 48.25L42 21.6875C42.8891 20.86 44.0645 20.4093 45.2789 20.4303C46.4934 20.4513 47.6525 20.9422 48.5125 21.8C49.3703 22.66 49.8612 23.8191 49.8822 25.0336C49.9032 26.2481 49.4526 27.4234 48.625 28.3125L30.0625 46.875L76.5625 46.875C77.8057 46.875 78.998 47.3689 79.8771 48.2479C80.7561 49.127 81.25 50.3193 81.25 51.5625C81.25 52.8057 80.7561 53.998 79.8771 54.8771C78.998 55.7561 77.8057 56.25 76.5625 56.25L30.0625 56.25L48.625 74.8125C49.5028 75.6914 49.9959 76.8828 49.9959 78.125C49.9959 79.3672 49.5028 80.5586 48.625 81.4375Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

function NextArrow({ className, style, onClick }) {
  return (
    <button
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="50" fill="#FFC06D" />
        <path
          d="M51.375 18.5625C52.2539 17.6847 53.4453 17.1916 54.6875 17.1916C55.9297 17.1916 57.1211 17.6847 58 18.5625L84.5625 45.125C85.4403 46.0039 85.9334 47.1953 85.9334 48.4375C85.9334 49.6797 85.4403 50.8711 84.5625 51.75L58 78.3125C57.1109 79.14 55.9355 79.5907 54.7211 79.5697C53.5066 79.5487 52.3475 79.0578 51.4875 78.2C50.6297 77.34 50.1388 76.1809 50.1178 74.9664C50.0968 73.7519 50.5474 72.5766 51.375 71.6875L69.9375 53.125H23.4375C22.1943 53.125 21.002 52.6311 20.1229 51.7521C19.2439 50.873 18.75 49.6807 18.75 48.4375C18.75 47.1943 19.2439 46.002 20.1229 45.1229C21.002 44.2439 22.1943 43.75 23.4375 43.75H69.9375L51.375 25.1875C50.4972 24.3086 50.0041 23.1172 50.0041 21.875C50.0041 20.6328 50.4972 19.4414 51.375 18.5625Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default function SliderSlick() {
  const [sliderRef, setSliderRef] = useState(null);
  // const swiper = useSwiper();
  // const swiperSlide = useSwiperSlide();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    // spaceBetween: 160,
    centerPadding: 198,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider {...sliderSettings} className="slider" ref={sliderRef}>
        {data.map((item) => (
          <div className={classNames('slider__slide')} key={item.id}>
            <Image src={item.image} alt={item.title} width={256} height={251} priority />
            <h2 className="title">{item.title}</h2>
            <p className="count">{item.count}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </Slider>
    </>
  );
}
