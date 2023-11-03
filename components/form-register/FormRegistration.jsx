'use client';

import { useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import InputForm from '../input-form/InputForm';

import styles from './form-reg.module.css';

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
          <InputForm placeholder="Вкажіть ваш UserName" type="login" name="login" />

          <InputForm placeholder="Вкажіть ваш E-mail" type="email" name="email" />

          <InputForm placeholder="Вкажіть ваш Пароль" type="password" name="password" />

          <InputForm placeholder="Підтвердіть ваш Пароль" type="password" name="password" />

          <button className={styles.form__buttonR} onClick={handleClick}>
          Зареєструватись
          </button>

          <div className={styles.form__or}>
            <span>or</span>
          </div>

          <button className={styles.form__submit} onSubmit={handleSubmit} type="submit">
            Зареєструватись за допомогою Google
          </button>

          <div className={styles.form__reg}>
            Якщо у вас є акаунту, будь ласка,
            <Link href="/auth"> Авторизуйтеся </Link>
          </div>

        </form>
      </div>
    </div>
  );
}