import React, { useEffect, useState } from 'react';
import styles from './order-history.module.css';
import { IOrder } from '@/types/interfaces/profile';
import { options, orders as mockOrders, receipt } from '@/app/profile/[userId]/mock-data';
import {
  containerStyle,
  controlStyles,
  dropdownIndicatorStyle,
  indicatorContainerStyle,
  indicatorSeparatorStyle,
  menuStyle,
  optionStyle,
} from '@/components/select/style';
import { Table } from './table/table';
import { handleChangeOption } from './helpers/handle-order-change.ts';
import Modal from '@/components/modal/modal';
import OrderModal from './components/order-modal/order-modal';
import OrderProducts from './components/products/products';
import Select from '@/components/select/select';
import { defaultSetDropList } from '@app/profile/[userId]/helpers';

interface IOrderHistory {}

export const OrderHistory: React.FC<IOrderHistory> = () => {
  const [orders, setOrders] = useState<IOrder[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRowClick = (id: number) => {
    setSelectedRow(id);
    setModalOpen(true);
  };

  useEffect(() => {
    const filteredOrder = orders.find(order => order.id === selectedRow);
    setSelectedOrder(filteredOrder || null);
  }, [orders, selectedRow]);

  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderContent}>
        <div className={styles.aboveTableBlock}>
          <h2 className={styles.title}>Order History</h2>
          <label className={styles.selectComponent}>
            <span>Sort:</span>
            <Select
              options={options}
              onChange={event =>
                handleChangeOption(event, setOrders, setSelectedRow, mockOrders, options)
              }
              defaultOption={defaultSetDropList}
              indicatorSeparatorStyle={indicatorSeparatorStyle}
              // @ts-expect-error props child
              indicatorContainerStyle={indicatorContainerStyle}
              containerStyle={containerStyle}
              controlStyle={controlStyles}
              dropdownIndicatorStyle={dropdownIndicatorStyle}
              menuStyle={menuStyle}
              optionStyle={optionStyle}
            />
          </label>
        </div>
        <Table orders={orders} handleRowClick={handleRowClick} selectedRow={selectedRow} />

        {selectedOrder && (
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <OrderModal order={selectedOrder} />
            <OrderProducts receipt={receipt} />
          </Modal>
        )}
      </div>
    </div>
  );
};
