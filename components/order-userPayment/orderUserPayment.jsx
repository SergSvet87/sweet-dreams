'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './orderUserPayment.module.css';

export function OrderUserPaymnet({ touched, errors, values }) {
  const cardNumber = useRef(null);
  const cardDate = useRef(null);
  const cardSecurity = useRef(null);
  const cardName = useRef(null);

  const handleFocus = e => {
    e.target.placeholder = '';
    if (e.target.name === 'card' && cardNumber.current) {
      cardNumber.current.style.opacity = '1';
    } else if (e.target.name === 'date' && cardDate.current) {
      cardDate.current.style.opacity = '1';
    } else if (e.target.name === 'security' && cardSecurity.current) {
      cardSecurity.current.style.opacity = '1';
    } else if (e.target.name === 'cardName' && cardName.current) {
      cardName.current.style.opacity = '1';
    }
  };

  const handleBlur = e => {
    if (!e.target.value && e.target.name === 'card' && cardNumber.current) {
      cardNumber.current.style.opacity = '0';
      e.target.placeholder = 'Card number';
    } else if (!e.target.value && e.target.name === 'date' && cardDate.current) {
      cardDate.current.style.opacity = '0';
      e.target.placeholder = 'MM/YY';
    } else if (!e.target.value && e.target.name === 'security' && cardSecurity.current) {
      cardSecurity.current.style.opacity = '0';
      e.target.placeholder = 'Security code';
    } else if (!e.target.value && e.target.name === 'cardName' && cardName.current) {
      cardName.current.style.opacity = '0';
      e.target.placeholder = 'Name on the card';
    }
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.payment_container}>
        <h2 className={styles.header_payment}>Payment</h2>
        <div className={styles.icons_container}>
          <Image src="/images/order/visa.svg" alt="visa" width={42} height={42} />
          <Image src="/images/order/mastercard.svg" alt="visa" width={41} height={31} />
        </div>
      </div>

      <label className={styles.payment_checkbox}>
        Use saved payment methods
        {values.isSavePayment ? (
          <Image src="/images/order/true.svg" alt="true" width={24} height={24} />
        ) : (
          <Image src="/images/order/checbox.svg" alt="visa" width={24} height={24} />
        )}
        <Field className={styles.checkbox} type="checkbox" name="isSavePayment" />
      </label>

      <label className={styles.label}>
        <div className={styles.flex_inputs_container}>
          <label>
            <span className={styles.span} ref={cardNumber}>
              Card number
            </span>
            <div>
              <Field
                className={touched.card && errors.card ? styles.error_input : styles.input}
                type="text"
                name="card"
                placeholder="Card number"
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <ErrorMessage name="card" component="p" className={styles.error} />
            </div>
          </label>

          <div className={styles.input_container_flex}>
            <label>
              <span className={styles.span} ref={cardDate}>
                MM/YY
              </span>
              <div>
                <Field
                  className={touched.date && errors.date ? styles.error_input : styles.input}
                  type="text"
                  name="date"
                  placeholder="MM/YY"
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
                <ErrorMessage name="date" component="p" className={styles.error} />
              </div>
            </label>
            <label>
              <span className={styles.span} ref={cardSecurity}>
                Security code
              </span>
              <div>
                <Field
                  className={
                    touched.security && errors.security ? styles.error_input : styles.input
                  }
                  type="text"
                  name="security"
                  placeholder="Security code"
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
                <ErrorMessage name="security" component="p" className={styles.error} />
              </div>
            </label>
          </div>
          <label>
            <span className={styles.span} ref={cardName}>
              Name on the card
            </span>
            <div>
              <Field
                className={touched.cardName && errors.cardName ? styles.error_input : styles.input}
                type="text"
                name="cardName"
                placeholder="Name on the card"
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              <ErrorMessage name="cardName" component="p" className={styles.error} />
            </div>
          </label>
        </div>
      </label>
    </div>
  );
}
