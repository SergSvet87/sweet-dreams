'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import { AppErrors } from '@/common/index';
import { RegisterSchema } from '@/utils/yup/index';
import FormRegistration from '@/components/form-register/FormRegistration';

import styles from '../auth.module.css';

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const handleSubmitForm = async (data) => {
    if (data.password === data.confirmPassword) {
      try {
        const userData = {
          userName: data.username,
          // lastName: data.userlastname,
          email: data.email,
          password: data.password,
        };
        const user = await instance.post('/api/Account/register', userData);
        console.log(user);
      } catch (e) {
        return e;
      }
    }
  };

  return (
    <div className={styles.auth}>
      <div className={classNames('auth__container', styles.auth__wrapper)}>
        <form className={styles.auth__form} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={styles.auth__title}>Registration</div>

          <FormRegistration register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
}
