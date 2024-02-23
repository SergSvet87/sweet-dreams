import { FC } from 'react';
import style from './products.module.css';
import { IReceipt } from '@/types/interfaces/profile';

interface IOrderProducts {
  receipt: IReceipt[];
  isMobile744: boolean;
}

const OrderProducts: FC<IOrderProducts> = ({ receipt, isMobile744 }) => {
  return (
    <>
      {!isMobile744 && (
        <div className={style.tableHeader}>
          <p>Products</p>
          <p>Total</p>
        </div>
      )}

      <div className={style.tableContainer}>
        {receipt.map(product => (
          <div className={style.cardContainer} key={product.item_no}>
            <div className={style.card}>
              <div className={style.imgContainer}>
                <img className={style.img} src={product.image} alt={product.name} />
                {isMobile744 && (
                  <div className={style.totalContainer}>
                    <p>Total:</p>
                    <p className={style.total}>{product.total}</p>
                  </div>
                )}
              </div>
              <div className={style.descriptionContainer}>
                <p className={style.candyName}>{product.name}</p>
                <p className={style.candyInf}>{product.info}</p>
                <p className={style.candyInf}>Item No: {product.item_no}</p>
                {isMobile744 && (
                  <div className={style.quantityContainer}>
                    <p className={style.candyPrice}>{product.price}</p>
                    <div className={style.factor}>
                      <p className={style.candyPrice}>x</p>
                      <p className={style.candyPrice}>{product.quantity}</p>
                    </div>
                  </div>
                )}
              </div>
              {!isMobile744 && (
                <>
                  <div className={style.descriptionContainer}>
                    <p className={style.candyName}>{product.price}</p>
                    <p className={style.candyName}>x</p>
                    <p className={style.candyName}>{product.quantity}</p>
                  </div>
                  <div className={style.descriptionContainer}>
                    <p className={style.candyName}>{product.total}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default OrderProducts;
