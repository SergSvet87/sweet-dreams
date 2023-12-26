import { FC } from 'react';
import style from './products.module.css';

interface IOrderProducts {}

const OrderProducts: FC<IOrderProducts> = () => {
  return (
    <>
      <div className={style.tableHeader}>
        <p>Products</p>
        <p>Total</p>
      </div>
      <div className={style.tableContainer}>
        <table className={style.table}>
          <tbody className={style.card}>
            <tr>
              <td>Товар 1</td>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
              <td style={{ textAlign: 'right' }}>Цена 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default OrderProducts;
