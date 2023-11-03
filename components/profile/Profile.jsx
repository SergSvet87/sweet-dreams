'use client';

import { useState, useRef } from 'react';
import {
  BsPersonCircle
} from 'react-icons/bs';

import { useClickOutside } from '@/hooks/useClickOutside';
import ProfileMenu from '../profile-menu/ProfileMenu';

import styles from './profile.module.css';

export default function Profile() {
  const [isOpen, setOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useClickOutside(profileMenuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <div className={styles.profile}>
      <button className={styles.profile__button} onClick={() => setOpen(!isOpen)}>
        <BsPersonCircle />
      </button>

      <ProfileMenu isOpen={isOpen} profileMenuRef={profileMenuRef} />
    </div>
  );
}
