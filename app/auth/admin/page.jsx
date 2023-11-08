'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import classNames from 'classnames';

import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { TIME_SHOW_PASSWORD } from '@/utils/const';
import { instance } from '@/utils/client';
import { AdminSchema } from '@/utils/yup/index';
import { showAuthError } from '@/common/errors/index';

import styles from '../auth.module.css';

export default function AdminEntry() {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordSvg, setPasswordSvg] = useState(<BsEyeSlash />);
  const [inputClass, setInputClass] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(AdminSchema),
  });

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

  const handleSubmitForm = async (data) => {
    try {
      const adminData = {
        name: data.name,
        password: data.password,
      };
      const admin = await instance.post('Account/login', adminData);
      if (admin.data) {
        toast.success('Вхід успішний!');
        router.push('/admin');
      }
    } catch (e) {
      showAuthError(e);
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
              className={`${styles.form__label__input} ${inputClass}`}
              type={passwordType}
              placeholder="Enter AdminPassword"
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

          <button className={styles.admin_form__submit} type="submit">
            entry
          </button>
        </form>
      </div>
    </div>
  );
}
