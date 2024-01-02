'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import useModalStore from '@hooks/useModalStore';
import { useClickOutside } from '@/hooks/useClickOutside';
import ProfileMenu from '../profile-menu/ProfileMenu';

import styles from './profile.module.css';

export default function Profile() {
  const { openModal } = useModalStore();
  const isMobile1440 = useMediaQuery(1440);
  const [isLogged, setIsLogged] = useState(true);
  const router = useRouter();
  const profileMenuRef = useRef(null);

  const handleClick = () => {
    if (!isLogged) {
      router.push('/profile');
    } else {
      openModal();
    }
  };

  // useEffect(() => {
  //   const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));
  //   const user = getCurrentUser();

  //   if (user) {
  //     setIsLogged(true);
  //     router.push('/userboard');
  //   } else {
  //     setIsLogged(false);
  //     router.push('/');
  //   }
  // }, []);

  // useClickOutside(profileMenuRef, () => {
  //   if (isOpen) setTimeout(() => setOpen(false), 50);
  // });

  return (
    <div className={styles.profile}>
      <button className={styles.profile__button} onClick={handleClick}>
        <Image
          src="/images/header/profile.svg"
          alt="Profile icon"
          width={48}
          height={48}
          priority
        />
      </button>

      {/* <ProfileMenu
        isOpen={isOpen}
        setOpen={setOpen}
        profileMenuRef={profileMenuRef}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
      /> */}
    </div>
  );
}
