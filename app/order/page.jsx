'use client'

import Image from 'next/image';
import classNames from 'classnames';

import { cartGoods } from '@/components/cart/Cart';

import styles from './order.module.css';

export default function Order() {

  return (
    <div className={styles.order}>
      <div className={classNames(styles.container, 'order__container')}>
        <h2 className={styles.title}>Кошик</h2>

        <form
          className={styles.form}
          id="order"
          // onSubmit={handleSubmit}
        >
          <ol className={styles.form__list}>
            {cartGoods.map((item) => (
              <li className={styles.form__item} key={item.id}>
                <div className={styles.item__img}>
                  <Image fill src={item.image} alt={item.title} />
                </div>
                <h3 className={styles.item__title}>{item.title}</h3>

                <p className={styles.item__count}>{item.quantity}</p>

                <p className={styles.item__total}>
                  <span className="currency">&nbsp;₴</span>
                  <span>{item.total}</span>
                </p>

                <button className={styles.item__del} type="button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.3002 5.71022C18.2077 5.61752 18.0978 5.54397 17.9768 5.49379C17.8559 5.44361 17.7262 5.41778 17.5952 5.41778C17.4643 5.41778 17.3346 5.44361 17.2136 5.49379C17.0926 5.54397 16.9827 5.61752 16.8902 5.71022L12.0002 10.5902L7.11022 5.70022C7.01764 5.60764 6.90773 5.5342 6.78677 5.4841C6.6658 5.43399 6.53615 5.4082 6.40522 5.4082C6.27429 5.4082 6.14464 5.43399 6.02368 5.4841C5.90272 5.5342 5.79281 5.60764 5.70022 5.70022C5.60764 5.79281 5.5342 5.90272 5.4841 6.02368C5.43399 6.14464 5.4082 6.27429 5.4082 6.40522C5.4082 6.53615 5.43399 6.6658 5.4841 6.78677C5.5342 6.90773 5.60764 7.01764 5.70022 7.11022L10.5902 12.0002L5.70022 16.8902C5.60764 16.9828 5.5342 17.0927 5.4841 17.2137C5.43399 17.3346 5.4082 17.4643 5.4082 17.5952C5.4082 17.7262 5.43399 17.8558 5.4841 17.9768C5.5342 18.0977 5.60764 18.2076 5.70022 18.3002C5.79281 18.3928 5.90272 18.4662 6.02368 18.5163C6.14464 18.5665 6.27429 18.5922 6.40522 18.5922C6.53615 18.5922 6.6658 18.5665 6.78677 18.5163C6.90773 18.4662 7.01764 18.3928 7.11022 18.3002L12.0002 13.4102L16.8902 18.3002C16.9828 18.3928 17.0927 18.4662 17.2137 18.5163C17.3346 18.5665 17.4643 18.5922 17.5952 18.5922C17.7262 18.5922 17.8558 18.5665 17.9768 18.5163C18.0977 18.4662 18.2076 18.3928 18.3002 18.3002C18.3928 18.2076 18.4662 18.0977 18.5163 17.9768C18.5665 17.8558 18.5922 17.7262 18.5922 17.5952C18.5922 17.4643 18.5665 17.3346 18.5163 17.2137C18.4662 17.0927 18.3928 16.9828 18.3002 16.8902L13.4102 12.0002L18.3002 7.11022C18.6802 6.73022 18.6802 6.09022 18.3002 5.71022Z"
                      fill="#FF0000"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ol>
        </form>

        <button className={styles.form__submit} type="submit" form="order">
          Оформити замовлення
        </button>
      </div>

      <button
        className={styles.modal__close}
        type="button"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="5.07422"
            y="5.28247"
            width="1"
            height="20"
            transform="rotate(-45 5.07422 5.28247)"
          />
          <rect
            x="5.78125"
            y="19.4246"
            width="1"
            height="20"
            transform="rotate(-135 5.78125 19.4246)"
          />
        </svg>
      </button>
    </div>
  );
}
