'use client';

// import {
//   Form,
//   Input,
//   LabelCheckbox,
//   Label,
//   HeaderContact,
//   HeaderDelivery,
//   Checkbox,
//   InputsContainer,
//   HeaderPayment,
//   PaymentCheckbox,
//   SaveCheckbox,
//   SmallInput,
//   InputContainer,
//   FlexInputsContainer,
//   BiggerInput,
//   FieldsContainer,
//   SubmitContainer,
//   Subtotal,
//   PayButton,
//   PriceContainer,
//   Price,
// } from './OrderUserForm.styled';
import { OrderGoods } from '../order-goods/OrderGoods';
import styles from './order-user.module.css';

export function OrderUserForm() {
  return (
    <form className={styles.form}>
      <div>
        <h2 className={styles.header_contact}>Contact</h2>
        <input
          className={styles.input}
          type="text"
          name="email"
          placeholder="youremail@gmail.com"
        />
        <h2 className={styles.header_delivery}>Delivery</h2>
        <label className={styles.label_checkbox}>
          Use saved addresses
          <input className={styles.checkbox} type="checkbox" />
        </label>
        <div className={styles.inputs_container}>
          <label className={styles.label}>
            Name
            <input className={styles.input} type="text" name="user name" />
          </label>
          <label className={styles.label}>
            Last name
            <input className={styles.input} type="text" name="user last name" />
          </label>
          <label className={styles.label}>
            Country
            <div className={styles.flex_inputs_container}>
              <input
                className={styles.input}
                type="text"
                name="yourInputName"
              />
              <div className={styles.input_container}>
                <input
                  className={styles.big_input}
                  type="text"
                  name="region"
                  placeholder="Region"
                />
                <input
                  className={styles.small_input}
                  type="text"
                  name="ZIP code"
                  placeholder="ZIP code"
                />
              </div>
              <input
                className={styles.input}
                type="text"
                name="city"
                placeholder="City"
              />
              <div className={styles.input_container}>
                <input
                  className={styles.small_input}
                  type="text"
                  name="building"
                  placeholder="Building"
                />
                <input
                  className={styles.small_input}
                  type="text"
                  name="unit"
                  placeholder="Unit"
                />
              </div>
              <input
                className={styles.input}
                type="text"
                name="user phone number"
                placeholder="Phone number"
              />
            </div>
          </label>
        </div>
        <h2 className={styles.header_payment}>Payment</h2>
        <label className={styles.payment_checkbox}>
          Use saved payment methods
          <input
            className={styles.checkbox}
            type="checkbox"
            name="yourInputName"
          />
        </label>
        <label className={styles.label}>
          <div className={styles.flex_inputs_container}>
            <input
              className={styles.input}
              type="text"
              name="card number"
              placeholder="Card number"
            />
            <div className={styles.input_container}>
              <input
                className={styles.small_input}
                type="text"
                name="user phone number"
                placeholder="MM/YY"
              />
              <input
                className={styles.small_input}
                type="text"
                name="user phone number"
                placeholder="Security code"
              />
            </div>
            <input
              className={styles.input}
              type="text"
              name="user phone number"
              placeholder="Name on the card"
            />
          </div>
        </label>
        <label className={styles.save_checkbox}>
          Save my information
          <input
            className={styles.checkbox}
            type="checkbox"
            name="yourInputName"
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
