'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { gsap } from 'gsap';

import { TIME_SHOW_HOME_ANIMATION } from '@/utils/const';

import './home-animation.css';

export default function HomeAnimation() {
  const [imgHeart, setImgHeart] = useState(`/images/home-animation/heart-red.png`);
  const animationRef = useRef();
  const router = useRouter();

  useLayoutEffect(() => {
    gsap.to('.angel1', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 2,
      delay: 2,
      ease: "power2.out",
    });

    gsap.to('.angel2', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 2.2,
      delay: 2.5,
      ease: "power2.out",
    });

    gsap.to('.cloud1', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 2,
      delay: 3,
      ease: "power2.out",
    });

    gsap.to('.cloud2', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 2.5,
      delay: 3.5,
      ease: "power2.out",
    });

    gsap.to('.cloud3', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 2.3,
      delay: 3.7,
      ease: "power2.out",
    });

    gsap.to('.cloud4', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 2.3,
      delay: 3.8,
      ease: "power2.out",
    });

    gsap.to('.cloud5', {
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      duration: 2,
      delay: 4,
      ease: "power2.out",
    });
    // gsap.fromTo('.angel1', { y: -200 }, { y: 0, x: -130, duration: 2, delay: 2 });
    // gsap.fromTo('.cloud1', { y: -200, x: 50 }, { y: 0, x: 250, duration: 2, delay: 3 });
    // gsap.fromTo('.cloud2', { y: -100, x: 2150 }, { y: 50, x: 1250, duration: 2.5, delay: 3.5 });
    // gsap.fromTo('.cloud3', { y: 400, x: -1150 }, { y: 500, x: 150, duration: 2.3, delay: 3.7 });
    // gsap.fromTo('.cloud4', { y: 300, x: 2150 }, { y: 450, x: 1100, duration: 2.3, delay: 3.8 });
    // gsap.fromTo('.cloud5', { y: 1800, x: 850 }, { y: 600, x: 650, duration: 2, delay: 4 });
    // gsap.fromTo('.angel2', { y: 600, x: 3000 }, { y: 670, x: 1300, duration: 2.2, delay: 2.5 });
    gsap.timeline().to('.heart', { rotation: 360, duration: 3, delay: 1 });
  }, []);

  const handleClick = () => {
    animationRef.current.classList.add('close');
    router.push('/');
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
            <Image src={imgHeart} width={600} height={400} alt="heart" priority />
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
