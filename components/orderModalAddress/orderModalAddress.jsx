'use client';
import Image from 'next/image';
import { Formik, Field, Form, ErrorMessage } from 'formik';

// import { validationSchema } from '@/utils/yup/index';
// import { initialValues, Values } from '@/utils/formik/initialValues';
import styles from './orderModalAddress.module.css';

function OrderModalAddress() {
  return (
    <Formik>
      {({ values }) => (
        <Form className={styles.form}>
          <div>
            {' '}
            <label className={styles.label_checkbox}>
              Address 1
              {values ? (
                <Image src="/images/order/true.svg" alt="true" width={24} height={24} />
              ) : (
                <Image src="/images/order/checbox.svg" alt="visa" width={24} height={24} />
              )}
              <Field className={styles.checkbox} type="checkbox" name="isSaveAddress" />
            </label>
            <label className={styles.label}>
              Country
              <div className={styles.flex_inputs_container}>
                <div>
                  <Field className={styles.input} type="text" name="country" />
                  <ErrorMessage name="country" component="p" className={styles.error} />
                </div>
                <div className={styles.input_container}>
                  <div>
                    <Field
                      className={styles.input}
                      type="text"
                      name="region"
                      placeholder="Region"
                    />
                    <ErrorMessage name="region" component="p" className={styles.error} />
                  </div>
                  <div>
                    <Field className={styles.input} type="text" name="zip" placeholder="ZIP code" />
                    <ErrorMessage name="zip" component="p" className={styles.error} />
                  </div>
                </div>
                <div>
                  <Field className={styles.input} type="text" name="city" placeholder="City" />
                  <ErrorMessage name="city" component="p" className={styles.error} />
                </div>
                <div>
                  <Field className={styles.input} type="text" name="street" placeholder="Street" />
                  <ErrorMessage name="street" component="p" className={styles.error} />{' '}
                </div>
                <div className={styles.input_container}>
                  <div>
                    <Field
                      className={styles.input}
                      type="text"
                      name="building"
                      placeholder="Building"
                    />
                    <ErrorMessage name="building" component="p" className={styles.error} />
                  </div>
                  <div>
                    <Field className={styles.input} type="text" name="unit" placeholder="Unit" />
                    <ErrorMessage name="unit" component="p" className={styles.error} />
                  </div>
                </div>
                <div>
                  <Field
                    className={styles.input}
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                  />
                  <ErrorMessage name="phone" component="p" className={styles.error} />
                </div>
              </div>
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default OrderModalAddress;
