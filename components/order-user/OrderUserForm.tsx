'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { OrderUserSubmit } from '@/components/order-userSubmit/OrderUserSubmit';
import { OrderUserPaymnet } from '@/components/order-userPayment/orderUserPayment';
import { validationSchema } from '@/utils/yup/index';
import { initialValues, Values } from '@/utils/formik/initialValues';
import styles from './order-user.module.css';

export function OrderUserForm() {
  const labelName = useRef<HTMLSpanElement>(null);
  const labelLastName = useRef<HTMLSpanElement>(null);
  const labelCountry = useRef<HTMLSpanElement>(null);
  const labelRegion = useRef<HTMLSpanElement>(null);
  const labelZIP = useRef<HTMLSpanElement>(null);
  const labelCity = useRef<HTMLSpanElement>(null);
  const labelStreet = useRef<HTMLSpanElement>(null);
  const labelBuilding = useRef<HTMLSpanElement>(null);
  const labelUnit = useRef<HTMLSpanElement>(null);
  const labelPhone = useRef<HTMLSpanElement>(null);

  const submitForm = (values: Values): void => {
    console.log(values);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
    if (e.target.name === 'name' && labelName.current) {
      labelName.current.style.opacity = '1';
    } else if (e.target.name === 'lastName' && labelLastName.current) {
      labelLastName.current.style.opacity = '1';
    } else if (e.target.name === 'country' && labelCountry.current) {
      labelCountry.current.style.opacity = '1';
    } else if (e.target.name === 'region' && labelRegion.current) {
      labelRegion.current.style.opacity = '1';
    } else if (e.target.name === 'zip' && labelZIP.current) {
      labelZIP.current.style.opacity = '1';
    } else if (e.target.name === 'city' && labelCity.current) {
      labelCity.current.style.opacity = '1';
    } else if (e.target.name === 'street' && labelStreet.current) {
      labelStreet.current.style.opacity = '1';
    } else if (e.target.name === 'building' && labelBuilding.current) {
      labelBuilding.current.style.opacity = '1';
    } else if (e.target.name === 'unit' && labelUnit.current) {
      labelUnit.current.style.opacity = '1';
    } else if (e.target.name === 'phone' && labelPhone.current) {
      labelPhone.current.style.opacity = '1';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value && e.target.name === 'name' && labelName.current) {
      labelName.current.style.opacity = '0';
      e.target.placeholder = 'Name';
    } else if (!e.target.value && e.target.name === 'lastName' && labelLastName.current) {
      labelLastName.current.style.opacity = '0';
      e.target.placeholder = 'Last name';
    } else if (!e.target.value && e.target.name === 'country' && labelCountry.current) {
      labelCountry.current.style.opacity = '0';
      e.target.placeholder = 'Country';
    } else if (!e.target.value && e.target.name === 'region' && labelRegion.current) {
      labelRegion.current.style.opacity = '0';
      e.target.placeholder = 'Region';
    } else if (!e.target.value && e.target.name === 'zip' && labelZIP.current) {
      labelZIP.current.style.opacity = '0';
      e.target.placeholder = 'ZIP code';
    } else if (!e.target.value && e.target.name === 'city' && labelCity.current) {
      labelCity.current.style.opacity = '0';
      e.target.placeholder = 'City';
    } else if (!e.target.value && e.target.name === 'unit' && labelUnit.current) {
      labelUnit.current.style.opacity = '0';
      e.target.placeholder = 'Unit';
    } else if (!e.target.value && e.target.name === 'phone' && labelPhone.current) {
      labelPhone.current.style.opacity = '0';
      e.target.placeholder = 'Phone';
    }
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
                <span className={styles.span} ref={labelName}>
                  Name
                </span>
                <Field
                  className={`${touched.name && errors.name ? styles.error_input : styles.input}`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
                <ErrorMessage name="name" component="p" className={styles.error} />
              </label>
              <label className={styles.label}>
                <span className={styles.span} ref={labelLastName}>
                  Last name
                </span>
                <Field
                  className={`${
                    touched.lastName && errors.lastName ? styles.error_input : styles.input
                  }`}
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                />
                <ErrorMessage name="lastName" component="p" className={styles.error} />
              </label>

              <div className={styles.flex_inputs_container}>
                <label className={styles.label}>
                  <span className={styles.span} ref={labelCountry}>
                    Country
                  </span>
                  <div>
                    <Field
                      className={
                        touched.country && errors.country ? styles.error_input : styles.input
                      }
                      type="text"
                      name="country"
                      placeholder="Country"
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                    />
                    <ErrorMessage name="country" component="p" className={styles.error} />
                  </div>
                </label>
                <div className={`${styles.input_container} ${styles.input_container_regionZIP}`}>
                  <label className={styles.label}>
                    <span className={styles.span} ref={labelRegion}>
                      Region
                    </span>
                    <div>
                      <Field
                        className={`${
                          touched.region && errors.region ? styles.error_input : styles.input
                        } ${styles.big_input}`}
                        type="text"
                        name="region"
                        placeholder="Region"
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                      />
                      <ErrorMessage name="region" component="p" className={styles.error} />
                    </div>
                  </label>
                  <label className={styles.label}>
                    <span className={styles.span} ref={labelZIP}>
                      ZIP code
                    </span>
                    <div>
                      <Field
                        className={`${
                          touched.name && errors.name ? styles.error_input : styles.input
                        } ${styles.small_input}`}
                        type="text"
                        name="zip"
                        placeholder="ZIP code"
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                      />
                      <ErrorMessage name="zip" component="p" className={styles.error} />
                    </div>
                  </label>
                </div>
                <label className={styles.label}>
                  <span className={styles.span} ref={labelCity}>
                    City
                  </span>
                  <div>
                    <Field
                      className={touched.city && errors.city ? styles.error_input : styles.input}
                      type="text"
                      name="city"
                      placeholder="City"
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                    />
                    <ErrorMessage name="city" component="p" className={styles.error} />
                  </div>
                </label>
                <label className={styles.label}>
                  <span className={styles.span} ref={labelStreet}>
                    Street
                  </span>
                  <div>
                    <Field
                      className={
                        touched.street && errors.street ? styles.error_input : styles.input
                      }
                      type="text"
                      name="street"
                      placeholder="Street"
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                    />
                    <ErrorMessage name="street" component="p" className={styles.error} />{' '}
                  </div>
                </label>
                <div className={styles.input_container}>
                  <label className={styles.label}>
                    <span className={styles.span} ref={labelBuilding}>
                      Building
                    </span>
                    <div>
                      <Field
                        className={
                          touched.building && errors.building ? styles.error_input : styles.input
                        }
                        type="text"
                        name="building"
                        placeholder="Building"
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                      />
                      <ErrorMessage name="building" component="p" className={styles.error} />
                    </div>
                  </label>
                  <label className={styles.label}>
                    <span className={styles.span} ref={labelUnit}>
                      Unit
                    </span>
                    <div>
                      <Field
                        className={touched.unit && errors.unit ? styles.error_input : styles.input}
                        type="text"
                        name="unit"
                        placeholder="Unit"
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                      />
                      <ErrorMessage name="unit" component="p" className={styles.error} />
                    </div>
                  </label>
                </div>
                <label className={styles.label}>
                  <span className={styles.span} ref={labelPhone}>
                    Phone number
                  </span>
                  <div>
                    <Field
                      className={touched.phone && errors.phone ? styles.error_input : styles.input}
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                    />
                    <ErrorMessage name="phone" component="p" className={styles.error} />
                  </div>
                </label>
              </div>
            </div>
            <OrderUserPaymnet touched={touched} errors={errors} values={values} />
            <label className={styles.label_checkbox}>
              SAVE MY INFORMATION
              {values.isSaveInformation ? (
                <Image src="/images/order/true.svg" alt="true" width={24} height={24} />
              ) : (
                <Image src="/images/order/checbox.svg" alt="visa" width={24} height={24} />
              )}
              <Field className={styles.checkbox} type="checkbox" name="isSaveInformation" />
            </label>
          </div>
          <OrderUserSubmit />
        </Form>
      )}
    </Formik>
  );
}
