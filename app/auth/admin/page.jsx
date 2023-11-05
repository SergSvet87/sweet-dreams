'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import { AdminSchema } from '@/utils/yup/index';
import { AppErrors } from '@/common/errors/index';

import styles from '../auth.module.css';

export default function AdminEntry() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(AdminSchema),
  });

  const handleSubmitForm = async (data) => {
    try {
      const userData = {
        name: data.name,
        password: data.password,
      };
      const user = await instance.post('/api/Account/login', userData);
      console.log(user);
    } catch (e) {
      return e;
    }
  };

  return (
    <div className={styles.auth}>
      <div className={classNames('auth__container', styles.auth__wrapper)}>
        <form
          className={styles.auth__form}
          onSubmit={handleSubmit(handleSubmitForm)}
          name="admin-form">
          <div className={styles.auth__title}>Authorization</div>

          <label className={styles.form__label}>
            <input
              className={styles.form__label__input}
              type="text"
              placeholder="Enter AdminName"
              name="name"
              {...register('name')}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name ? (
              <span className={styles.form__label__error} role="alert">
                {errors.name.message}
              </span>
            ) : (
              ''
            )}
          </label>

          <label className={styles.form__label}>
            <input
              className={styles.form__label__input}
              type="password"
              placeholder="Enter AdminPassword"
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

          <button className={styles.admin_form__submit} type="submit">
            entry
          </button>
        </form>
      </div>
    </div>
  );
}
