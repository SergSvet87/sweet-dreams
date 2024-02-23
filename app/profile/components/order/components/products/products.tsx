import { FC } from 'react';
import Image from 'next/image';
import style from './products.module.css';
import { IReceipt } from '@/types/interfaces/profile';

interface IOrderProducts {
  receipt: IReceipt[];
}

const OrderProducts: FC<IOrderProducts> = ({ receipt }) => {
  return (
    <>
      <div className={style.tableHeader}>
        <p>Products</p>
        <p>Total</p>
      </div>
      <div className={style.tableContainer}>
        {receipt.map(product => (
          <div className={style.cardContainer} key={product.item_no}>
            <div className={style.card}>
              <div className={style.imgContainer}>
                <img className={style.img} src={product.image} alt={product.name} />
              </div>
              <div className={style.descriptionContainer}>
                <p className={style.candyName}>{product.name}</p>
                <p className={style.candyInf}>{product.info}</p>
                <p className={style.candyInf}>Item No: {product.item_no}</p>
              </div>
              <div className={style.descriptionContainer}>
                <p className={style.candyName}>{product.price}</p>
                <p className={style.candyName}>x</p>
                <p className={style.candyName}>{product.quantity}</p>
              </div>
              <div className={style.descriptionContainer}>
                <p className={style.candyName}>{product.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default OrderProducts;
