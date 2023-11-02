import React from 'react';
import InputForm from '../input-form/InputForm.jsx';
import cn from 'classnames';

import styles from './form-registration.module.css';

export default function FormRegistration({ isOpen, formRef }) {
  const handleClick = () => {
    console.log('click');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit');

    formRef.current.reset();
  };

  return (
    <form className={cn(styles.profile__form, isOpen ? styles.active : '')} ref={formRef}>
      <button className={styles.form__google} onClick={handleClick}>
        Google
      </button>

      <div className={styles.form__or}><span>or</span></div>

      <InputForm placeholder="Вкажіть ваші Ф.І.П." type="text" name="text" />

      <InputForm placeholder="Вкажіть ваш E-mail" type="email" name="email" />

      <InputForm placeholder="Вкажіть ваш Пароль" type="password" name="password" />

      <button className={styles.form__submit} onSubmit={handleSubmit} type="submit">
        Реєстрація
      </button>
    </form>
  );
}
