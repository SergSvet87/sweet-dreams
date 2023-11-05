'use client';

import { useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import { AppErrors } from '@/common/errors/index';
import { LoginSchema } from '@/utils/yup/index';
import { instance } from '@/utils/client';
import FormAuth from '@/components/form-login/FormLogin';
// import { userRequestAsync } from '@/store/user/userSlice.js';

import styles from '../auth.module.css';

export default function LoginPage() {
  const router = useRouter()
  // const { isLogged } = useSelector((state) => state.isLogged);
  // const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // useEffect(() => {
  //   dispatch(userRequestAsync("max"));
  // }, []);

  const handleSubmitForm = async (data) => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const user = await instance.post('Account/login', userData);
      if (user.data) {
        router.push('/');
      }
    } catch (e) {
      return e;
    }
  };

  return (
    <div className={styles.auth}>
      <div className={classNames('auth__container', styles.auth__wrapper)}>
        <form className={styles.auth__form} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={styles.auth__title}>Login</div>

          <FormAuth register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
}
