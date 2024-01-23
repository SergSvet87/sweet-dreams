'use client';
import Image from 'next/image';
import { Formik, Field, Form } from 'formik';
import styles from './orderModalAddress.module.css';

function OrderModalAddress() {
  return (
    <Formik>
      {({ values }) => (
        <Form className={styles.form}>
          <div>
            <label className={styles.label_checkbox}>
              <span className={styles.span}>Address 1</span>
              {values ? (
                <Image src="/images/order/true.svg" alt="true" width={24} height={24} />
              ) : (
                <Image src="/images/order/checbox.svg" alt="visa" width={24} height={24} />
              )}
              <Field className={styles.checkbox} type="checkbox" name="isSaveAddress" />
            </label>

            <div className={styles.flex_inputs_container}>
              <label>
                <span className={styles.span}>Country</span>

                <div>
                  <Field className={styles.input} type="text" name="country" />
                </div>
              </label>
              <div className={styles.input_container_region}>
                <label>
                  <span className={styles.span}>Region</span>
                  <div>
                    <Field className={styles.input_region} type="text" name="region" />
                  </div>
                </label>
                <label>
                  <span className={styles.span}>ZIP</span>
                  <div>
                    <Field
                      className={`${styles.input} ${styles.input_ZIP}`}
                      type="text"
                      name="zip"
                    />
                  </div>
                </label>
              </div>
              <label>
                <span className={styles.span}>City</span>
                <div>
                  <Field className={styles.input} type="text" name="city" />
                </div>
              </label>
              <label>
                <span className={styles.span}>Street</span>
                <div>
                  <Field className={styles.input} type="text" name="street" />
                </div>
              </label>
              <div className={styles.input_container}>
                <label>
                  <span className={styles.span}>Building</span>
                  <div>
                    <Field className={styles.input} type="text" name="building" />
                  </div>
                </label>
                <label>
                  <span className={styles.span}>Unit</span>
                  <div>
                    <Field className={styles.input} type="text" name="unit" />
                  </div>
                </label>
              </div>
              <label>
                <span className={styles.span}>Phone number</span>
                <div>
                  <Field className={styles.input} type="text" name="phone" />
                </div>
              </label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default OrderModalAddress;
