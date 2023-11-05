'use client';

import Link from 'next/link';

import styles from '../../app/auth/auth.module.css';

export default function FormLogin({ register, errors }) {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
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
          type="password"
          placeholder="Вкажіть ваш Пароль"
          name="password"
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
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

      <div className={styles.form__memory}>
        <label className={styles.form__memory__label}>
          <input className={styles.form__memory__input} type="checkbox" name="memory" />
          <span className={styles.form__memory__text}>"Запам'ятати мене"</span>
        </label>
      </div>

      <button className={styles.form__submit} type="submit">
        Авторизація
      </button>

      <div className={styles.form__reg}>
        Якщо у Вас не має акаунту, будь ласка,
        <Link href="/auth/registration"> Зареєструйтеся</Link>
      </div>

      <a className={styles.form__lost_pass} href="#">
        Забули пароль
      </a>
    </>
  );
}
