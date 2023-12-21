'use client';

// import Image from 'next/image';
// import classNames from 'classnames';

// import { cartGoods } from '@/components/cart/Cart';

// import styles from './order.module.css';

import { OrderContainer, Container } from './order.styled';

import { OrderUserForm } from '../../components/order-user/OrderUserForm';
import { OrderGoods } from '../../components/order-goods/OrderGoods';

export default function Order() {
  return (
    <OrderContainer>
      <Container>
        <OrderUserForm />
        <OrderGoods />
      </Container>
    </OrderContainer>
  );
}
