import React from 'react';
import styles from './table.module.css';
import { IOrder } from '@/types/interfaces/profile';

interface IProfileOrderTable {
  orders: IOrder[];
  handleRowClick: (id: number) => void;
  selectedRow: number | null;
}

export const Table: React.FC<IProfileOrderTable> = ({ orders, handleRowClick, selectedRow }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.headerTable}>
        <tr className={styles.rowTable}>
          <th className={styles.rowCellHeader}>Order number</th>
          <th className={styles.rowCellHeader}>Order date</th>
          <th className={styles.rowCellHeader}>Order total</th>
          <th className={styles.rowCellHeader}>Order status</th>
        </tr>
      </thead>
      <div className={styles.tbodyWrapper}>
        <table className={styles.table}>
          <tbody className={styles.tbody}>
            {orders.map(order => (
              <tr
                className={`${styles.lineOrder} ${selectedRow === order.id ? styles.selected : ''}`}
                key={order.id}
                onClick={() => handleRowClick(order.id)}
              >
                <td className={styles.rowCellTable}>{order.number}</td>
                <td className={styles.rowCellTable}>{order.date}</td>
                <td className={styles.rowCellTable}>{order.total}</td>
                <td className={styles.rowCellTable}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </table>
  );
};
