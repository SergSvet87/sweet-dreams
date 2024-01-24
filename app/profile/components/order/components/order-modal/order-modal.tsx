import { FC } from 'react';
import style from './order-modal.module.css';
import { IOrder } from '@/types/interfaces/profile';

interface IOrderModal {
  order: IOrder | null;
  isMobile744: boolean;
}

const OrderModal: FC<IOrderModal> = ({ order, isMobile744 }) => {
  return (
    <div className={style.orderContainer}>
      <table>
        <tr className={style.orderParagraph}>
          <td>Order №</td>
          <td className={style.numberOrder}>{order?.number}</td>
        </tr>
        <tr className={style.orderParagraph}>
          <td>Order date:</td>
          <td className={style.orderValues}>{order?.date}</td>
        </tr>
        <tr className={style.orderParagraph}>
          <td className={style.contactName}>Delivery address:</td>
          <td className={style.orderValues}>{order?.address}</td>
        </tr>
        <tr className={style.orderParagraph}>
          <td className={style.contactName}>Recipient:</td>
          <td className={style.orderValues}>{order?.recipient}</td>
        </tr>
        <tr className={style.orderParagraph}>
          <td className={style.contactName}>Phone number:</td>
          <td className={style.orderValues}>{order?.phone}</td>
        </tr>
        {isMobile744 && (
          <tr className={style.orderParagraph}>
            <td className={style.contactName}>Subtotal </td>
            <td className={style.orderValues}>{order?.total}</td>
          </tr>
        )}
      </table>
      {!isMobile744 && (
        <p className={style.orderTotal}>
          Subtotal <span className={style.numberOrder}>{order?.total}</span>
        </p>
      )}
    </div>
  );
};
export default OrderModal;
