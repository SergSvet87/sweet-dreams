'use client';

import { OrderGoods } from '../order-goods/OrderGoods';
import styles from './order-user.module.css';
import Image from 'next/image';

export function OrderUserForm() {
  return (
    <form className={styles.form}>
      <div>
        <h2 className={styles.header_contact}>Contact</h2>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="youremail@gmail.com"
          required
        />
        <h2 className={styles.header_delivery}>Delivery</h2>
        <label className={styles.label_checkbox}>
          Use saved addresses
          <input
            className={styles.checkbox}
            type="checkbox"
            name="saved address"
          />
        </label>
        <div className={styles.inputs_container}>
          <label className={styles.label}>
            Name
            <input className={styles.input} type="text" name="name" required />
          </label>
          <label className={styles.label}>
            Last name
            <input className={styles.input} type="text" name="last name" />
          </label>
          <label className={styles.label}>
            Country
            <div className={styles.flex_inputs_container}>
              <input
                className={styles.input}
                type="text"
                name="country"
                required
              />
              <div className={styles.input_container}>
                <input
                  className={styles.big_input}
                  type="text"
                  name="region"
                  placeholder="Region"
                  required
                />
                <input
                  className={styles.small_input}
                  type="text"
                  name="ZIP"
                  placeholder="ZIP code"
                  required
                />
              </div>
              <input
                className={styles.input}
                type="text"
                name="city"
                placeholder="City"
                required
              />
              <div className={styles.input_container}>
                <input
                  className={styles.small_input}
                  type="text"
                  name="building"
                  placeholder="Building"
                  required
                />
                <input
                  className={styles.small_input}
                  type="text"
                  name="unit"
                  placeholder="Unit"
                  required
                />
              </div>
              <input
                className={styles.input}
                type="text"
                name="phone number"
                placeholder="Phone number"
                required
              />
            </div>
          </label>
        </div>
        <div className={styles.payment_container}>
          <h2 className={styles.header_payment}>Payment</h2>
          <div className={styles.icons_container}>
            <Image
              src="/images/order/visa.svg"
              alt="visa"
              width={42}
              height={42}
            />
            <Image
              src="/images/order/mastercard.svg"
              alt="visa"
              width={41}
              height={31}
            />
          </div>
        </div>

        <label className={styles.payment_checkbox}>
          Use saved payment methods
          <input
            className={styles.checkbox}
            type="checkbox"
            name="payment methods"
          />
        </label>

        <label className={styles.label}>
          <div className={styles.flex_inputs_container}>
            <input
              className={styles.input}
              type="text"
              name="card"
              placeholder="Card number"
              required
            />
            <div className={styles.input_container}>
              <input
                className={styles.small_input}
                type="text"
                name="mm/yy"
                placeholder="MM/YY"
                required
              />
              <input
                className={styles.small_input}
                type="text"
                name="security code"
                placeholder="Security code"
                required
              />
            </div>
            <input
              className={styles.input}
              type="text"
              name="card name"
              placeholder="Name on the card"
              required
            />
          </div>
        </label>
        <label className={styles.save_checkbox}>
          Save my information
          <input
            className={styles.checkbox}
            type="checkbox"
            name="save information"
          />
        </label>
      </div>

      <div>
        <div className={styles.submit_container}>
          <div className={styles.price_container}>
            <p className={styles.subtotal}>Subtotal</p>
            <p className={styles.price}>₴300</p>
          </div>
          <button className={styles.pay_button} type="submit">
            Pay now
          </button>
        </div>
        <OrderGoods />
      </div>
    </form>
  );
}
