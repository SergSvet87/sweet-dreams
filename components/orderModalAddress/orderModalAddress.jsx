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
            <label className={styles.label_checkbox}>
              Address 1
              {values ? (
                <Image src="/images/order/true.svg" alt="true" width={24} height={24} />
              ) : (
                <Image src="/images/order/checbox.svg" alt="visa" width={24} height={24} />
              )}
              <Field className={styles.checkbox} type="checkbox" name="isSaveAddress" />
            </label>

            <div className={styles.flex_inputs_container}>
              <label>
                Country
                <div>
                  <Field className={styles.input} type="text" name="country" />
                </div>
              </label>
              <div className={styles.input_container_region}>
                <label>
                  Region
                  <div>
                    <Field className={styles.input_region} type="text" name="region" />
                  </div>
                </label>
                <label>
                  ZIP
                  <div>
                    <Field className={styles.input} type="text" name="zip" />
                  </div>
                </label>
              </div>
              <label>
                City
                <div>
                  <Field className={styles.input} type="text" name="city" />
                </div>
              </label>
              <label>
                Street
                <div>
                  <Field className={styles.input} type="text" name="street" />
                </div>
              </label>
              <div className={styles.input_container}>
                <label htmlFor="">
                  Building
                  <div>
                    <Field className={styles.input} type="text" name="building" />
                  </div>
                </label>
                <label htmlFor="">
                  Unit
                  <div>
                    <Field className={styles.input} type="text" name="unit" />
                  </div>
                </label>
              </div>
              <label>
                Phone number
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
