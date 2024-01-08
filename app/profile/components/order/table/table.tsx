import React from 'react';
import styles from './table.module.css';
import { IProfileOrderTable } from '@/types/interfaces';

export const Table: React.FC<IProfileOrderTable> = ({ orders, handleRowClick, selectedRow }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Order number</th>
          <th className={styles.th}>Order date</th>
          <th className={styles.th}>Order total</th>
          <th className={styles.th}>Order status</th>
        </tr>
      </thead>
      <div className={styles.tbodyWrapper}>
        <table className={styles.table}>
          <tbody className={styles.tbody}>
            {orders.map((order) => (
              <tr
                className={`${styles.lineOrder} ${selectedRow === order.id ? styles.selected : ''}`}
                key={order.id}
                onClick={() => handleRowClick(order.id)}
              >
                <td className={styles.td}>{order.number}</td>
                <td className={styles.td}>{order.date}</td>
                <td className={styles.td}>{order.total}</td>
                <td className={styles.td}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </table>
  );
};
