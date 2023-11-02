'use client';

import React, { useState, useRef } from 'react';
import {
  BsPersonCircle
} from 'react-icons/bs';

import FormRegistration from '../form-registration/FormRegistration';
import { useClickOutside } from '@/hooks/useClickOutside';

import styles from './profile.module.css';

export default function Profile() {
  const [isOpen, setOpen] = useState(false);
  const formRef = useRef(null);

  useClickOutside(formRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <div className={styles.profile}>
      <button className={styles.profile__button} onClick={() => setOpen(!isOpen)}>
        <BsPersonCircle />
      </button>

      <FormRegistration isOpen={isOpen} formRef={formRef} />
    </div>
  );
}
