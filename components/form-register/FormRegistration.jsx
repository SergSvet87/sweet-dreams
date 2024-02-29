'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { TIME_SHOW_PASSWORD } from '@/utils/const';

import styles from '../../app/auth/auth.module.css';
import { signUpGoogle } from '@utils/client';
import axios from 'axios';
import { signIn } from 'next-auth/react';

export default function FormRegistration({ register, errors }) {
  const [passwordConfirmType, setPasswordConfirmType] = useState('password');
  const [passwordConfirmSvg, setPasswordConfirmSvg] = useState(<BsEyeSlash />);
  const [passwordType, setPasswordType] = useState('password');
  const [passwordSvg, setPasswordSvg] = useState(<BsEyeSlash />);
  const [inputClass, setInputClass] = useState('');
  const [acceptWithRules, setAcceptWithRules] = useState(false);
  const labelTextEmail = useRef();
  const labelTextPassword = useRef();
  const labelTextConfirm = useRef();
  const labelTextLastName = useRef();
  const labelTextFirstName = useRef();
  const labelTextPhone = useRef();

  const handleClick = async () => {
    const qwe = signIn('google', { callbackUrl: 'http://localhost:3000/userboard' });
    // const qwe = await axios.get('https://candyheaven.fly.dev/api/Account/googleAuth/register');
    // const qwe = fetch('https://candyheaven.fly.dev/api/Account/googleAuth/login');
    console.log('qwe', qwe);
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

  const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  const handleFocusEmail = () => {
    labelTextEmail.current.style.opacity = '1';
  };

  const handleFocusPassword = () => {
    labelTextPassword.current.style.opacity = '1';
  };

  const handleFocusConfirm = () => {
    labelTextConfirm.current.style.opacity = '1';
  };

  const handleFocusFirstName = () => {
    labelTextFirstName.current.style.opacity = '1';
  };

  const handleFocusLastName = () => {
    labelTextLastName.current.style.opacity = '1';
  };

  const handleFocusPhone = () => {
    labelTextPhone.current.style.opacity = '1';
  };

  return (
    <>
      <label className={styles.form__label}>
        <span className={styles.label__text} ref={labelTextFirstName}>
          First Name
        </span>
        <input
          className={styles.form__label__input}
          type="text"
          placeholder="First Name"
          name="firstName"
          onFocus={handleFocusFirstName}
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
        <span className={styles.label__text} ref={labelTextLastName}>
          Last Name
        </span>
        <input
          className={styles.form__label__input}
          type="text"
          placeholder="LastName"
          name="lastName"
          onFocus={handleFocusLastName}
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
        <span className={styles.label__text} ref={labelTextPhone}>
          phone
        </span>
        <input
          className={styles.form__label__input}
          type="phone"
          placeholder="+38(---)"
          // value="+38"
          name="phone"
          onFocus={handleFocusPhone}
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
          Password
        </span>
        <input
          className={`${styles.form__label__input} ${inputClass}`}
          type={passwordType}
          placeholder="Password"
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

      <label className={styles.form__label}>
        <span className={styles.label__text} ref={labelTextConfirm}>
          Confirm password
        </span>
        <input
          className={styles.form__label__input}
          type={passwordConfirmType}
          placeholder="Confirm your password"
          name="confirmPassword"
          onFocus={handleFocusConfirm}
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

      <label className={styles.form__checkbox}>
        <input
          className={styles.checkbox__input}
          type="checkbox"
          onChange={toggleAcceptWithRules}
          aria-label="Remember me"
          name="remember"
        />
        <span className={styles.checkbox__span} />
        <span className={styles.checkbox__text}>
          I understand and agree with <Link href="#">Terms & Conditions</Link> and{' '}
          <Link href="#">Privacy Policy</Link>
        </span>
      </label>

      <button className={styles.form__submit} type="submit">
        Create
      </button>

      <div className={styles.form__or}>
        <span>or</span>
      </div>

      <button className={styles.form__google} onClick={handleClick} type="button">
        {/* <Link
        className={styles.form__google}
        href={'https://candyheaven.fly.dev/api/Account/googleAuth/register'}
      > */}
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
        {/* </Link> */}
      </button>

      <div className={styles.form__reg}>
        {/* If you have an account, please */}
        <Link href="/auth/login"> Log in</Link>
      </div>
    </>
  );
}
