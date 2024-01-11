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
  const [acceptWithRules, setAcceptWithRules] = useState(false);
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

  const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

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

      <label className={styles.form__checkbox}>
        <input
          className={styles.checkbox__input}
          type="checkbox"
          onChange={toggleAcceptWithRules}
          aria-label="Remember me"
          name="remember"
        />
        <span className={styles.checkbox__span} />
        <span className={styles.checkbox__text}>Remember me</span>
      </label>

      <button className={styles.form__submit} type="submit">
        Log In
      </button>

      <div className={styles.form__or}>
        <span>or</span>
      </div>

      <button className={styles.form__google} onClick={handleClick} type="button">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
            fill="#FFC107"
          />
          <path
            d="M3.65283 7.3455L6.93833 9.755C7.82733 7.554 9.98033 6 12.4998 6C14.0293 6 15.4208 6.577 16.4803 7.5195L19.3088 4.691C17.5228 3.0265 15.1338 2 12.4998 2C8.65883 2 5.32783 4.1685 3.65283 7.3455Z"
            fill="#FF3D00"
          />
          <path
            d="M12.5002 22.0003C15.0832 22.0003 17.4302 21.0118 19.2047 19.4043L16.1097 16.7853C15.0719 17.5745 13.8039 18.0014 12.5002 18.0003C9.89916 18.0003 7.69066 16.3418 6.85866 14.0273L3.59766 16.5398C5.25266 19.7783 8.61366 22.0003 12.5002 22.0003Z"
            fill="#4CAF50"
          />
          <path
            d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
            fill="#1976D2"
          />
        </svg>
        Continue with google
      </button>

      <div className={styles.form__links}>
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
