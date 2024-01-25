'use client';
import Image from 'next/image';
import { Formik, Field, Form } from 'formik';

import styles from './orderModalCard.module.css';

function OrderModalCard() {
  return (
    <Formik>
      {({ values }) => (
        <Form className={styles.form}>
          <div>
            <label className={styles.label_checkbox}>
              photo
              {values ? (
                <Image src="/images/order/true.svg" alt="true" width={24} height={24} />
              ) : (
                <Image src="/images/order/checbox.svg" alt="visa" width={24} height={24} />
              )}
              <Field className={styles.checkbox} type="checkbox" name="isSaveAddress" />
            </label>

            <div className={styles.flex_inputs_container}>
              <label>
                <span className={styles.span}>Expiration date (MM/YY)</span>
                <Field className={styles.input} type="text" name="card" />
              </label>
              <div className={styles.input_container}>
                <label>
                  <Field className={`${styles.input}`} type="text" name="date" />
                </label>
                <label>
                  <span className={styles.span}>Security code</span>
                  <Field
                    className={`${styles.input} ${styles.input_date_code}`}
                    type="text"
                    name="security"
                  />
                </label>
              </div>
              <label>
                <span className={styles.span}>Name on the card</span>
                <Field className={styles.input} type="text" name="cardName" />
              </label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default OrderModalCard;
