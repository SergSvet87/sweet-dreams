'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import { AuthErrors, showAuthError } from '@/common/errors/index';
import { RegisterSchema } from '@/utils/yup/index';
import { signUp } from '@/utils/client';
import FormRegistration from '@/components/form-register/FormRegistration';

import styles from '../auth.module.css';

export default function RegisterPage() {
  const router = useRouter();
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
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          password: data.password,
        };

        const user = await signUp(userData);

        if (user.status === 200) {
          toast.success('Registration was successful!');
          router.push('/auth/login');
        }
      } catch (e) {
        showAuthError(e);
      }
    } else {
      AuthErrors.PasswordDoNotMatch;
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
