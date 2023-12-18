'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import { ResetSchema } from '@/utils/yup/index';
import { TIME_SHOW_PASSWORD } from '@/utils/const';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

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
        email: data.email,
        password: data.password,
      };

      const user = await signIn(userData).then((res) => {
        // Cookies.set('tokenKey', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data));

        return res.data;
      });

      if (user) {
        toast.success('Login is complete!');
        router.push('/userboard');
      }
    } catch (e) {
      toast.error('Invalid credentials :(', e);
      showAuthError(e);
    }
  };

  return (
    <section className={styles.auth}>
      <div className="reset__container">
        <h2 className={styles.auth__title}>Reset your password</h2>

        <form className={styles.auth__form} name="reset" onSubmit={handleSubmit(handleSubmitForm)}>
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
  );
}
