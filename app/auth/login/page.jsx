'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import { showAuthError } from '@/common/errors/index';
import { signIn } from '@/utils/client';
import { LoginSchema } from '@/utils/yup/index';
import FormAuth from '@/components/form-login/FormLogin';
import Search from '@/components/search/Search';
import Background from '@/components/background/Background';

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

  const handleSubmitForm = async data => {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };

      const user = await signIn(userData).then(res => {
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
    <>
      <Search />

      <div className={styles.auth}>
        <Background />

        <div className={classNames('auth__container', styles.auth__wrapper)}>
          <h2 className={styles.auth__title}>Login</h2>

          <form className={styles.auth__form} onSubmit={handleSubmit(handleSubmitForm)}>
            <FormAuth register={register} errors={errors} />
          </form>
        </div>
      </div>
    </>
  );
}
