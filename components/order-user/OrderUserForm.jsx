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
} from './OrderUserForm.styled';

export function OrderUserForm() {
  return (
    <Form>
      <HeaderContact>Contact</HeaderContact>
      <Input type="text" name="email" placeholder="youremail@gmail.com" />

      <HeaderDelivery>Delivery</HeaderDelivery>

      <LabelCheckbox>
        Use saved addresses
        <Checkbox type="checkbox" />
      </LabelCheckbox>
      <InputsContainer>
        <Label>
          Name
          <Input type="text" name="user name" />
        </Label>
        <Label>
          Last name
          <Input type="text" name="user last name" />
        </Label>
        <Label>
          Country
          <FlexInputsContainer>
            <Input type="text" name="yourInputName" />
            <InputContainer>
              <BiggerInput type="text" name="region" placeholder="Region" />
              <SmallInput type="text" name="ZIP code" placeholder="ZIP code" />
            </InputContainer>
            <Input type="text" name="city" placeholder="City" />
            <InputContainer>
              <SmallInput type="text" name="building" placeholder="Building" />
              <SmallInput type="text" name="unit" placeholder="Unit" />
            </InputContainer>
            <Input type="text" name="user phone number" placeholder="Phone number" />
          </FlexInputsContainer>
        </Label>
      </InputsContainer>
      <HeaderPayment>Payment</HeaderPayment>

      <PaymentCheckbox>
        Use saved payment methods
        <Checkbox type="checkbox" name="yourInputName" />
      </PaymentCheckbox>
      <Label>
        <FlexInputsContainer>
          <Input type="text" name="card number" placeholder="Card number" />
          <InputContainer>
            <SmallInput type="text" name="user phone number" placeholder="MM/YY" />
            <SmallInput type="text" name="user phone number" placeholder="Security code" />
          </InputContainer>
          <Input type="text" name="user phone number" placeholder="Name on the card" />
        </FlexInputsContainer>
      </Label>
      <SaveCheckbox>
        Save my information
        <Checkbox type="checkbox" name="yourInputName" />
      </SaveCheckbox>
    </Form>
  );
}
