import { FC } from 'react';
import style from './order-modal.module.css';
import { IOrder } from '@/types/interfaces';

interface IOrderModal {
  order: IOrder;
}

const OrderModal: FC<IOrderModal> = ({ order }) => {
  return (
    <div className={style.orderContainer}>
      <h1 className={style.orderNumber}>
        Order № <span className={style.numberOrder}>{order.number}</span>
      </h1>
      <table>
        <tr className={style.orderParagraph}>
          <td>Order date:</td>
          <td className={style.orderValues}>{order.date}</td>
        </tr>
        <tr className={style.orderParagraph}>
          <td className={style.contactName}>Delivery address:</td>
          <td className={style.orderValues}>{order.address}</td>
        </tr>
        <tr className={style.orderParagraph}>
          <td className={style.contactName}>Recipient:</td>
          <td className={style.orderValues}>{order.recipient}</td>
        </tr>
        <tr className={style.orderParagraph}>
          <td className={style.contactName}>Phone number:</td>
          <td className={style.orderValues}>{order.phone}</td>
        </tr>
      </table>
      <p className={style.orderTotal}>
        Subtotal <span className={style.numberOrder}>{order.total}</span>
      </p>
    </div>
  );
};
export default OrderModal;
