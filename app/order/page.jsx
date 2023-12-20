'use client';

// import Image from 'next/image';
// import classNames from 'classnames';

// import { cartGoods } from '@/components/cart/Cart';

// import styles from './order.module.css';

import {} from './order.styled';

export default function Order() {
  return (
    <div>
      <form>
        <h2>Contact</h2>
        <input type="text" name="yourInputName" />

        <h2>Delivery</h2>
        <input type="checkbox" name="yourInputName" />
        <label>
          Name
          <input type="text" name="yourInputName" />
        </label>
        <label>
          Last name
          <input type="text" name="yourInputName" />
        </label>
        <label>
          Country
          <input type="text" name="yourInputName" />
          <input type="text" name="yourInputName" />
          <input type="text" name="yourInputName" />
          <input type="text" name="yourInputName" />
          <input type="text" name="yourInputName" />
          <input type="text" name="yourInputName" />
          <input type="text" name="yourInputName" />
        </label>
      </form>
    </div>
  );
}
