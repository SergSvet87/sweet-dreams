import { FC } from 'react';
import style from './delivery.module.css';

interface IDelivery {}

const Delivery: FC<IDelivery> = () => {
  return (
    <div className={style.deliveryContainer}>
      <h2 className={style.title}>Order History</h2>
    </div>
  );
};
export default Delivery;
