'use client';

import { useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import InputForm from '../input-form/InputForm';

import styles from './form-auth.module.css';

export default function FormRegistration() {
  const formRegRef = useRef();

  const handleClick = () => {
    console.log('click');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit');

    formRef.current.reset();
  };

  return (
    <div className={styles.auth}>
      <div className={classNames('auth__container', styles.auth__wrapper)}>
        <form className={styles.form} ref={formRegRef}>
          <InputForm placeholder="Вкажіть ваш E-mail" type="email" name="email" />

          <InputForm placeholder="Вкажіть ваш Пароль" type="password" name="password" />

          <div className={styles.form__or}>
            <span>or</span>
          </div>

          <button className={styles.form__google} onClick={handleClick}>
            Google
          </button>

          <div className={styles.form__memory}>
            <label className={styles.form__memory__label}>
              <input className={styles.form__memory__input} type="checkbox" name="memory" />
              <span className={styles.form__memory__text}>Запам'ятати мене</span>
            </label>
          </div>

          <button className={styles.form__submit} onSubmit={handleSubmit} type="submit">
            Авторизація
          </button>

          <div className={styles.form__reg}>
            Якщо у Вас не має акаунту, будь ласка,
            <Link href="/registr"> Зареєструйтеся</Link>
          </div>

          <a className={styles.form__lost_pass} href="#">
            Забули пароль
          </a>
        </form>
      </div>
    </div>
  );
}
