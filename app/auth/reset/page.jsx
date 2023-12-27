'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import classNames from 'classnames';

import { ResetSchema } from '@/utils/yup/index';
import { TIME_SHOW_PASSWORD } from '@/utils/const';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Background from '@/components/backgroud/Background';
import Search from '@/components/search/Search';

import styles from '../auth.module.css';

export default function Reset() {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordSvg, setPasswordSvg] = useState(<BsEyeSlash />);
  const [inputClass, setInputClass] = useState('');
  const labelTextPassword = useRef(null);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ResetSchema),
  });

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

  const handleSubmitForm = async (data) => {
    try {
      const userData = {
        password: data.password,
      };

      const user = await signIn(userData).then((res) => res.data);

      if (user) {
        toast.success('Password saved!');
        router.push('/auth/login');
      }
    } catch (e) {
      toast.error('Invalid credentials :(', e);
      showAuthError(e);
    }
  };

  return (
    <>
      <Search />

      <section className={styles.auth}>
        <Background />

        <div className={classNames('auth__container', styles.auth__wrapper)}>
          <h2 className={styles.auth__title}>Reset your password</h2>

          <form
            className={styles.auth__form}
            name="reset"
            onSubmit={handleSubmit(handleSubmitForm)}>
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

            <button className={styles.form__submit} type="submit" disabled>
              Submit
            </button>

            <button className={styles.form__reset} type="reset">
              Cancel
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
