'use client';

import Link from 'next/link';

import styles from '../../app/auth/auth.module.css';

export default function FormRegistration({ register, errors }) {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
      <label className={styles.form__label}>
        <input
          className={styles.form__label__input}
          type="text"
          placeholder="Вкажіть ваш UserName"
          name="username"
          {...register('username')}
          aria-invalid={errors.username ? 'true' : 'false'}
        />
        {errors.username ? (
          <span className={styles.form__label__error} role="alert">
            {errors.username.message}
          </span>
        ) : (
          ''
        )}
      </label>

      {/* <label className={styles.form__label}>
        <input
          className={styles.form__label__input}
          type="text"
          placeholder="Вкажіть ваш LastName"
          name="login"
          {...register('userlastname')}
          aria-invalid={errors.userlastname ? 'true' : 'false'}
        />
        {errors.userlastname ? (
          <span className={styles.form__label__error} role="alert">
            {errors.userlastname.message}
          </span>
        ) : (
          ''
        )}
      </label> */}

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
