'use client';

import {
  Form,
  Input,
  LabelCheckbox,
  Label,
  HeaderContact,
  HeaderDelivery,
  Checkbox,
  InputsContainer,
  HeaderPayment,
  PaymentCheckbox,
  SaveCheckbox,
  SmallInput,
  InputContainer,
  FlexInputsContainer,
  BiggerInput,
  FieldsContainer,
  SubmitContainer,
  Subtotal,
  PayButton,
  PriceContainer,
  Price,
} from './OrderUserForm.styled';
import { OrderGoods } from '../order-goods/OrderGoods';
import styles from './order-user.module.css';

export function OrderUserForm() {
  return (
    <Form className={styles.form}>
      <FieldsContainer>
        <HeaderContact className={styles.header_contact}>Contact</HeaderContact>
        <Input
          className={styles.input}
          type="text"
          name="email"
          placeholder="youremail@gmail.com"
        />
        <HeaderDelivery className={styles.header_delivery}>
          Delivery
        </HeaderDelivery>
        <LabelCheckbox className={styles.label_checkbox}>
          Use saved addresses
          <Checkbox className={styles.checkbox} type="checkbox" />
        </LabelCheckbox>
        <InputsContainer className={styles.inputs_container}>
          <Label className={styles.label}>
            Name
            <Input className={styles.input} type="text" name="user name" />
          </Label>
          <Label className={styles.label}>
            Last name
            <Input className={styles.input} type="text" name="user last name" />
          </Label>
          <Label className={styles.label}>
            Country
            <FlexInputsContainer className={styles.flex_inputs_container}>
              <Input
                className={styles.input}
                type="text"
                name="yourInputName"
              />
              <InputContainer className={styles.input_container}>
                <BiggerInput
                  className={styles.big_input}
                  type="text"
                  name="region"
                  placeholder="Region"
                />
                <SmallInput
                  className={styles.small_input}
                  type="text"
                  name="ZIP code"
                  placeholder="ZIP code"
                />
              </InputContainer>
              <Input
                className={styles.input}
                type="text"
                name="city"
                placeholder="City"
              />
              <InputContainer className={styles.input_container}>
                <SmallInput
                  className={styles.small_input}
                  type="text"
                  name="building"
                  placeholder="Building"
                />
                <SmallInput
                  className={styles.small_input}
                  type="text"
                  name="unit"
                  placeholder="Unit"
                />
              </InputContainer>
              <Input
                className={styles.input}
                type="text"
                name="user phone number"
                placeholder="Phone number"
              />
            </FlexInputsContainer>
          </Label>
        </InputsContainer>
        <HeaderPayment className={styles.header_payment}>Payment</HeaderPayment>
        <PaymentCheckbox className={styles.payment_checkbox}>
          Use saved payment methods
          <Checkbox
            className={styles.checkbox}
            type="checkbox"
            name="yourInputName"
          />
        </PaymentCheckbox>
        <Label className={styles.label}>
          <FlexInputsContainer className={styles.flex_inputs_container}>
            <Input
              className={styles.input}
              type="text"
              name="card number"
              placeholder="Card number"
            />
            <InputContainer className={styles.input_container}>
              <SmallInput
                className={styles.small_input}
                type="text"
                name="user phone number"
                placeholder="MM/YY"
              />
              <SmallInput
                className={styles.small_input}
                type="text"
                name="user phone number"
                placeholder="Security code"
              />
            </InputContainer>
            <Input
              className={styles.input}
              type="text"
              name="user phone number"
              placeholder="Name on the card"
            />
          </FlexInputsContainer>
        </Label>
        <SaveCheckbox className={styles.save_checkbox}>
          Save my information
          <Checkbox
            className={styles.checkbox}
            type="checkbox"
            name="yourInputName"
          />
        </SaveCheckbox>
      </FieldsContainer>

      <div>
        <SubmitContainer className={styles.submit_container}>
          <PriceContainer className={styles.price_container}>
            <Subtotal className={styles.subtotal}>Subtotal</Subtotal>
            <Price className={styles.price}>₴300</Price>
          </PriceContainer>
          <PayButton className={styles.pay_button} type="submit">
            Pay now
          </PayButton>
        </SubmitContainer>
        <OrderGoods />
      </div>
    </Form>
  );
}
