'use client';

// import Image from 'next/image';
// import classNames from 'classnames';

// import { cartGoods } from '@/components/cart/Cart';

// import styles from './order.module.css';

import {
  Form,
  OrderContainer,
  Input,
  LabelCheckbox,
  Label,
  HeaderContact,
  HeaderDelivery,
  Checkbox,
  InputsContainer,
} from './order.styled';

export default function Order() {
  return (
    <OrderContainer>
      <Form>
        <HeaderContact>Contact</HeaderContact>
        <Input type="text" name="yourInputName" />

        <HeaderDelivery>Delivery</HeaderDelivery>

        <LabelCheckbox>
          Use saved addresses
          <Checkbox type="checkbox" name="yourInputName" />
        </LabelCheckbox>
        <InputsContainer>
          <Label>
            Name
            <Input type="text" name="yourInputName" />
          </Label>
          <Label>
            Last name
            <Input type="text" name="yourInputName" />
          </Label>
          <Label>
            Country
            <Input type="text" name="yourInputName" />
            <Input type="text" name="yourInputName" />
            <Input type="text" name="yourInputName" />
            <Input type="text" name="yourInputName" />
            <Input type="text" name="yourInputName" />
            <Input type="text" name="yourInputName" />
            <Input type="text" name="yourInputName" />
          </Label>
        </InputsContainer>
      </Form>
    </OrderContainer>
  );
}
