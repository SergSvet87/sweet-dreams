'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { TIME_SHOW_HOME_ANIMATION } from '@/utils/const';

import './home-animation.css';

export default function HomeAnimation() {
  const [imgHeart, setImgHeart] = useState(`/images/home-animation/heart-red.png`);
  const animationRef = useRef();

  const handleClick = () => {
    animationRef.current.classList.add('close');
  };

  setTimeout(() => {
    setImgHeart('/images/home-animation/heart-black.png');
  }, TIME_SHOW_HOME_ANIMATION);

  return (
    <section className="animation" ref={animationRef}>
      <div className="animation__container">
        <div className="angel1"></div>
        <div className="angel2"></div>
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
        <div className="cloud4"></div>
        <div className="cloud5"></div>
        <div className="heart">
          <button type="button" onClick={handleClick}>
            <Image src={imgHeart} width={600} height={400} alt="heart" />
          </button>
        </div>
      </div>

      <div className="background-animation">
        <div id="angel-one"></div>
        <div id="angel-two"></div>
      </div>
    </section>
  );
}
