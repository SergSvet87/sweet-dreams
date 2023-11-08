'use client';

import { useState } from 'react';
import Link from 'next/link';

import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { TIME_SHOW_PASSWORD } from '@/utils/const';

import styles from '../../app/auth/auth.module.css';

export default function FormRegistration({ register, errors }) {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordSvg, setPasswordSvg] = useState(<BsEyeSlash />);

  const handleClick = () => {
    console.log('click');
  };

  const showPassword = () => {

    setPasswordSvg(<BsEye />);
    setPasswordType('text');
  
    let interval = setInterval(() => {
      setPasswordType('password');
  
      setPasswordSvg(<BsEyeSlash />);
      clearInterval(interval);
    }, TIME_SHOW_PASSWORD);
  };

  return (
    <>
      <label className={styles.form__label}>
        <input
          className={styles.form__label__input}
          type="text"
          placeholder="Вкажіть ваш FirstName"
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
          placeholder="Вкажіть ваш LastName"
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
          placeholder="Вкажіть ваш E-mail"
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
          className={styles.form__label__input}
          type={passwordType}
          placeholder="Вкажіть ваш Пароль"
          name="password"
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        <button
          className={styles.form__label__btn}
          type="button"
          onClick={showPassword}>
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
          type="password"
          placeholder="Підтвердіть ваш Пароль"
          name="confirmPassword"
          {...register('confirmPassword')}
          aria-invalid={errors.confirmPassword ? 'true' : 'false'}
        />
        {errors.confirmPassword ? (
          <span className={styles.form__label__error} role="alert">
            {errors.confirmPassword.message}
          </span>
        ) : (
          ''
        )}
      </label>

      <button className={styles.form__button} type="submit">
        Зареєструватись
      </button>

      <div className={styles.form__or}>
        <span>or</span>
      </div>

      <button className={styles.form__submit} onClick={handleClick} type="button">
        Зареєструватись за допомогою Google
      </button>

      <div className={styles.form__reg}>
        Якщо у вас є акаунт, будь ласка,
        <Link href="/auth/login"> Авторизуйтеся </Link>
      </div>
    </>
  );
}
