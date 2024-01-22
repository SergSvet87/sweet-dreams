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
                Card Number
                <Field className={styles.input} type="text" name="card" />
              </label>
              <div className={styles.input_container}>
                <label htmlFor="">
                  Expiration date (MM/YY)
                  <Field className={styles.input} type="text" name="date" />
                </label>
                <label htmlFor="">
                  Security code
                  <Field className={styles.input} type="text" name="security" />
                </label>
              </div>
              <label>
                Name on the card
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
