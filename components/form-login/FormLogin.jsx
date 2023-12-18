'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

import { TIME_SHOW_PASSWORD } from '@/utils/const';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import styles from '../../app/auth/auth.module.css';

export default function FormLogin({ register, errors }) {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordSvg, setPasswordSvg] = useState(<BsEyeSlash />);
  const [inputClass, setInputClass] = useState('');
  const labelTextEmail = useRef();
  const labelTextPassword = useRef();

  const handleClick = () => {
    console.log('click');
  };

  const handleFocusEmail = () => {
    labelTextEmail.current.style.opacity = '1';
  };

  const handleFocusPassword = () => {
    labelTextPassword.current.style.opacity = '1';
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

  return (
    <>
      <label className={styles.form__label}>
        <span className={styles.label__text} ref={labelTextEmail}>
          Email
        </span>
        <input
          className={styles.form__label__input}
          type="email"
          placeholder="Enter your e-mail"
          name="email"
          onFocus={handleFocusEmail}
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
        <span className={styles.label__text} ref={labelTextPassword}>
          password
        </span>
        <input
          className={`${styles.form__label__input} ${inputClass}`}
          type={passwordType}
          placeholder="Enter your password"
          name="password"
          onFocus={handleFocusPassword}
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

      <div className={styles.form__or}>
        <span>or</span>
      </div>

      <button className={styles.form__google} onClick={handleClick} type="button">
        Google
      </button>

      {/* <div className={styles.form__memory}>
        <label className={styles.form__memory__label}>
          <input className={styles.form__memory__input} type="checkbox" name="memory" />
          <span className={styles.form__memory__text}>Remember me</span>
        </label>
      </div> */}

      <button className={styles.form__submit} type="submit">
        Log In
      </button>

      <div className={styles.form__links}>
        {/* If you do not have an account, please */}
        <Link className={styles.form__link} href="/auth/registration">
          Create account
        </Link>

        <Link className={styles.form__link} href="/auth/reset">
          Forgot password
        </Link>
      </div>
    </>
  );
}
