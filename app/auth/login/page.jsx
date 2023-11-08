'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import { showAuthError } from '@/common/errors/index';
import { instance } from '@/utils/client';
import { LoginSchema } from '@/utils/yup/index';
import FormAuth from '@/components/form-login/FormLogin';

import styles from '../auth.module.css';

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const handleSubmitForm = async (data) => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };

      const user = await instance.post('Account/login', userData);

      if (user.data) {
        toast.success('Login is complete!');
        router.push('/');
      }
    } catch (e) {
      showAuthError(e)
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
