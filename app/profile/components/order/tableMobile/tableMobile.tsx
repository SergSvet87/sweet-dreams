import React from 'react';
import styles from './tableMobile.module.css';
import { IOrder } from '@/types/interfaces/profile';

interface IProfileOrderTableMobile {
  orders: IOrder[];
  handleRowClick: (id: number) => void;
  selectedRow: number | null;
}

export const TableMobile: React.FC<IProfileOrderTableMobile> = ({
  orders,
  handleRowClick,
  selectedRow,
}) => {
  return (
    <table className={styles.table}>
      <tbody>
        {orders.map(order => (
          <tr
            className={`${styles.lineOrder} ${selectedRow === order.id ? styles.selected : ''}`}
            key={order.id}
            onClick={() => handleRowClick(order.id)}
          >
            <td className={styles.rowCellTable}>
              <p>Order number</p> <br /> <p>Order date</p> <br /> <p>Order total</p> <br />{' '}
              <p>Order status</p>
            </td>
            <td className={styles.rowCellTable}>
              <h4>{order.number}</h4> <br />
              <h4>{order.date}</h4> <br />
              <h4>{order.total}</h4> <br />
              <h4>{order.status}</h4>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
