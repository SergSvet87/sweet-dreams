import Image from 'next/image';
import classNames from 'classnames';

import Search from '@/components/search/Search.jsx';

import styles from './profile.module.css';

const PROFILE = [
  {
    id: 1,
    name: 'account details',
    page: 'account',
    path: '/account',
    icon: '/images/profile/user.svg',
  },
  {
    id: 2,
    name: 'order history',
    page: 'order',
    path: '/order',
    icon: '/images/profile/order.svg',
  },
  {
    id: 3,
    name: 'favorites list',
    page: 'favorites',
    path: '/favorites',
    icon: '/images/profile/favorites.svg',
  },
  {
    id: 4,
    name: 'delivery addresses',
    page: 'delivery',
    path: '/delivery',
    icon: '/images/profile/delivery.svg',
  },
  {
    id: 5,
    name: 'payment  methods',
    page: 'payment',
    path: '/payment',
    icon: '/images/profile/payment.svg',
  },
  {
    id: 6,
    name: 'log out',
    page: 'logout',
    path: '/logout',
    icon: '/images/profile/logout.svg',
  },
];

export default function Profile() {
  return (
    <>
      <Search />

      <section className={styles.profile}>
        <div className={classNames('profile__container', styles.profile__wrapper)}>
          <aside className={styles.profile__sidebar}>
            <div className={styles.profile__name}>
              <span>First Name</span>
              <span>Last Name</span>
            </div>

            <div className={styles.profile__email}>useremail@gmail.com</div>

            <ul className={styles.profile__list}>
              {PROFILE.map((item) => (
                <li className={styles.profile__item} key={item.id}>
                  <Image priority src={item.icon} height={28} width={28} alt={item.name} />
                  {item.name}
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.profile__content}>
            <h2 className={styles.profile__title}>account details</h2>

            {/* <form action="">
              <label className={styles.form__label}>
                <span className={styles.label__text} ref={labelTextEmail}>
                  Email
                </span>
                <input
                  className={styles.form__label__input}
                  type="email"
                  placeholder="Enter your e-mail"
                  name="email"
                  onFocus={handleFocusEmail}
                  {...register('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email ? (
                  <span className={styles.form__label__error} role="alert">
                    {errors.email.message}
                  </span>
                ) : (
                  ''
                )}
              </label>

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
            </form> */}
          </div>
        </div>
      </section>
    </>
  );
}
