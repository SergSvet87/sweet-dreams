'use client';

import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import classNames from 'classnames';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

function PrevArrow({ className, onClick }) {
  return (
    <button
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    ></button>
  );
}

function NextArrow({ className, onClick }) {
  return (
    <button
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    ></button>
  );
}

export default function SliderSlick() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    accessibility: true,
  };

  return (
    <Slider {...sliderSettings} className="slider" ref={sliderRef}>
      {data.map((item) => (
        <div className={classNames('slider__slide')} key={item.id}></div>
      ))}
    </Slider>
  );
}
