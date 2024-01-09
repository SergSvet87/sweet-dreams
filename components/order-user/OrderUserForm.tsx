'use client';

import Image from 'next/image';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { OrderGoods } from '@/components/order-goods/OrderGoods';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { validationSchema } from '@/utils/yup/index';
import { initialValues, Values } from '@/utils/formik/initialValues';
import styles from './order-user.module.css';

export function OrderUserForm() {
  const isMobile1440 = useMediaQuery(1439);

  const submitForm = (values: Values): void => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
      {({ touched, errors, values }) => (
        <Form className={styles.form}>
          <div className={styles.form_container}>
            <h2 className={styles.header_contact}>Contact</h2>
            <Field
              className={touched.email && errors.email ? styles.error_input : styles.input}
              type="email"
              name="email"
              placeholder="youremail@gmail.com"
            />
            <ErrorMessage name="email" component="p" className={styles.error} />
            <h2 className={styles.header_delivery}>Delivery</h2>
            <label className={styles.label_checkbox}>
              Use saved addresses
              {values.isSaveAddress ? (
                <Image src="/images/order/true.svg" alt="true" width={24} height={24} />
              ) : (
                <Image src="/images/order/checbox.svg" alt="visa" width={24} height={24} />
              )}
              <Field className={styles.checkbox} type="checkbox" name="isSaveAddress" />
            </label>
            <div className={styles.inputs_container}>
              <label className={styles.label}>
                Name
                <Field
                  className={`${touched.name && errors.name ? styles.error_input : styles.input}`}
                  type="text"
                  name="name"
                />
                <ErrorMessage name="name" component="p" className={styles.error} />
              </label>
              <label className={styles.label}>
                Last name
                <Field
                  className={
                    touched.lastName && errors.lastName ? styles.error_input : styles.input
                  }
                  type="text"
                  name="lastName"
                />
                <ErrorMessage name="lastName" component="p" className={styles.error} />
              </label>
              <label className={styles.label}>
                Country
                <div className={styles.flex_inputs_container}>
                  <div>
                    {' '}
                    <Field
                      className={
                        touched.country && errors.country ? styles.error_input : styles.input
                      }
                      type="text"
                      name="country"
                    />
                    <ErrorMessage name="country" component="p" className={styles.error} />
                  </div>
                  <div className={styles.input_container}>
                    <div>
                      <Field
                        className={
                          touched.region && errors.region ? styles.error_input : styles.input
                        }
                        type="text"
                        name="region"
                        placeholder="Region"
                      />
                      <ErrorMessage name="region" component="p" className={styles.error} />
                    </div>
                    <div>
                      <Field
                        className={touched.zip && errors.zip ? styles.error_input : styles.input}
                        type="text"
                        name="zip"
                        placeholder="ZIP code"
                      />
                      <ErrorMessage name="zip" component="p" className={styles.error} />
                    </div>
                  </div>
                  <div>
                    <Field
                      className={touched.city && errors.city ? styles.error_input : styles.input}
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                    <ErrorMessage name="city" component="p" className={styles.error} />
                  </div>
                  <div>
                    <Field
                      className={
                        touched.street && errors.street ? styles.error_input : styles.input
                      }
                      type="text"
                      name="street"
                      placeholder="Street"
                    />
                    <ErrorMessage name="street" component="p" className={styles.error} />{' '}
                  </div>
                  <div className={styles.input_container}>
                    <div>
                      <Field
                        className={
                          touched.building && errors.building ? styles.error_input : styles.input
                        }
                        type="text"
                        name="building"
                        placeholder="Building"
                      />
                      <ErrorMessage name="building" component="p" className={styles.error} />
                    </div>
                    <div>
                      <Field
                        className={touched.unit && errors.unit ? styles.error_input : styles.input}
                        type="text"
                        name="unit"
                        placeholder="Unit"
                      />
                      <ErrorMessage name="unit" component="p" className={styles.error} />
                    </div>
                  </div>
                  <div>
                    <Field
                      className={touched.phone && errors.phone ? styles.error_input : styles.input}
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                    />
                    <ErrorMessage name="phone" component="p" className={styles.error} />
                  </div>
                </div>
              </label>
            </div>
            <div className={styles.payment_container}>
              <h2 className={styles.header_payment}>Payment</h2>
              <div className={styles.icons_container}>
                <Image src="/images/order/visa.svg" alt="visa" width={42} height={42} />
                <Image src="/images/order/mastercard.svg" alt="visa" width={41} height={31} />
              </div>
            </div>

            <label className={styles.payment_checkbox}>
              Use saved payment methods
              <Field className={styles.checkbox} type="checkbox" name="isSavePayment" />
            </label>

            <label className={styles.label}>
              <div className={styles.flex_inputs_container}>
                <div>
                  <Field
                    className={touched.card && errors.card ? styles.error_input : styles.input}
                    type="text"
                    name="card"
                    placeholder="Card number"
                  />
                  <ErrorMessage name="card" component="p" className={styles.error} />
                </div>
                <div className={styles.input_container_flex}>
                  <div>
                    <Field
                      className={touched.date && errors.date ? styles.error_input : styles.input}
                      type="text"
                      name="date"
                      placeholder="MM/YY"
                    />
                    <ErrorMessage name="date" component="p" className={styles.error} />
                  </div>
                  <div>
                    <Field
                      className={
                        touched.security && errors.security ? styles.error_input : styles.input
                      }
                      type="text"
                      name="security"
                      placeholder="Security code"
                    />
                    <ErrorMessage name="security" component="p" className={styles.error} />
                  </div>
                </div>
                <div>
                  <Field
                    className={
                      touched.cardName && errors.cardName ? styles.error_input : styles.input
                    }
                    type="text"
                    name="cardName"
                    placeholder="Name on the card"
                  />
                  <ErrorMessage name="cardName" component="p" className={styles.error} />
                </div>
              </div>
            </label>
            <label className={styles.save_checkbox}>
              Save my information
              <Field className={styles.checkbox} type="checkbox" name="isSaveInformation" />
            </label>
          </div>

          <div className={styles.submit_goods_container}>
            {isMobile1440 && <OrderGoods />}
            <div className={styles.submit_container}>
              <div className={styles.price_container}>
                <p className={styles.subtotal}>Subtotal</p>
                <p className={styles.price}>₴300</p>
              </div>
              <button className={styles.pay_button} type="submit">
                Pay now
              </button>
            </div>
            {!isMobile1440 && <OrderGoods />}
          </div>
        </Form>
      )}
    </Formik>
  );
}
