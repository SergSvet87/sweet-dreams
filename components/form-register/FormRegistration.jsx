'use client';

import { useState } from 'react';
import Link from 'next/link';

import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { TIME_SHOW_PASSWORD } from '@/utils/const';

import styles from '../../app/auth/auth.module.css';

export default function FormRegistration({ register, errors }) {
  const [passwordConfirmType, setPasswordConfirmType] = useState('password');
  const [passwordConfirmSvg, setPasswordConfirmSvg] = useState(<BsEyeSlash />);
  const [passwordType, setPasswordType] = useState('password');
  const [passwordSvg, setPasswordSvg] = useState(<BsEyeSlash />);
  const [inputClass, setInputClass] = useState('');

  const handleClick = () => {
    console.log('click');
  };

  const showPassword = () => {
    setPasswordSvg(<BsEye />);
    setPasswordType('text');
    setInputClass(`${styles.animate_password}`);

    let interval = setInterval(() => {
      setInputClass('');
      setPasswordType('password');
      setPasswordSvg(<BsEyeSlash />);

      clearInterval(interval);
    }, TIME_SHOW_PASSWORD);
  };

  const showConfirmPassword = () => {
    setPasswordConfirmSvg(<BsEye />);
    setPasswordConfirmType('text');

    let interval = setInterval(() => {
      setPasswordConfirmType('password');
      setPasswordConfirmSvg(<BsEyeSlash />);

      clearInterval(interval);
    }, 1000);
  };

  return (
    <>
      <label className={styles.form__label}>
        <input
          className={styles.form__label__input}
          type="text"
          placeholder="Enter your FirstName"
          name="firstName"
          {...register('firstName')}
          aria-invalid={errors.firstName ? 'true' : 'false'}
        />
        {errors.firstName ? (
          <span className={styles.form__label__error} role="alert">
            {errors.firstName.message}
          </span>
        ) : (
          ''
        )}
      </label>

      <label className={styles.form__label}>
        <input
          className={styles.form__label__input}
          type="text"
          placeholder="Enter your LastName"
          name="lastName"
          {...register('lastName')}
          aria-invalid={errors.lastName ? 'true' : 'false'}
        />
        {errors.lastName ? (
          <span className={styles.form__label__error} role="alert">
            {errors.lastName.message}
          </span>
        ) : (
          ''
        )}
      </label>

      <label className={styles.form__label}>
        <input
          className={styles.form__label__input}
          type="phone"
          placeholder="+38(---)"
          // value="+38"
          name="phone"
          {...register('phone')}
          aria-invalid={errors.phone ? 'true' : 'false'}
        />
        {errors.phone ? (
          <span className={styles.form__label__error} role="alert">
            {errors.phone.message}
          </span>
        ) : (
          ''
        )}
      </label>

      <label className={styles.form__label}>
        <input
          className={styles.form__label__input}
          type="email"
          placeholder="Enter your e-mail"
          name="email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email ? (
          <span className={styles.form__label__error} role="alert">
            {errors.email.message}
          </span>
        ) : (
          ''
        )}
      </label>

      <label className={styles.form__label}>
        <input
          className={`${styles.form__label__input} ${inputClass}`}
          type={passwordType}
          placeholder="Enter your password"
          name="password"
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        <button className={styles.form__label__btn} type="button" onClick={showPassword}>
          {passwordSvg}
        </button>
        {errors.password ? (
          <span className={styles.form__label__error} role="alert">
            {errors.password.message}
          </span>
        ) : (
          ''
        )}
      </label>

      <label className={styles.form__label}>
        <input
          className={styles.form__label__input}
          type={passwordConfirmType}
          placeholder="Confirm your password"
          name="confirmPassword"
          {...register('confirmPassword')}
          aria-invalid={errors.confirmPassword ? 'true' : 'false'}
        />
        <button className={styles.form__label__btn} type="button" onClick={showConfirmPassword}>
          {passwordConfirmSvg}
        </button>
        {errors.confirmPassword ? (
          <span className={styles.form__label__error} role="alert">
            {errors.confirmPassword.message}
          </span>
        ) : (
          ''
        )}
      </label>

      <button className={styles.form__button} type="submit">
        Register
      </button>

      <div className={styles.form__or}>
        <span>or</span>
      </div>

      <button className={styles.form__submit} onClick={handleClick} type="button">
        Sign up with Google
      </button>

      <div className={styles.form__reg}>
        If you have an account, please
        <Link href="/auth/login"> Log in</Link>
      </div>
    </>
  );
}
