import React, { useState } from 'react';
import styles from './order-history.module.css';
import { IOptions, IOrder, IOrderHistor } from '@/types/interfaces';
import Select from '@/components/select/select';
import {
  options,
  orders as mockOrders,
  sortByDate,
  filterOrdersLastMonths,
  filterOrdersFor2023,
} from '@/app/profile/[userId]/helpers';
import {
  containerStyle,
  controlStyles,
  dropdownIndicatorStyle,
  indicatorContainerStyle,
  indicatorSeparatorStyle,
  menuStyle,
  optionStyle,
} from '@/components/select/style';
import { ActionMeta, SingleValue } from 'react-select';
import { Table } from './table/table';

export const OrderHistory: React.FC<IOrderHistor> = () => {
  const [orders, setOrders] = useState<IOrder[]>(mockOrders);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handChangeOtion = (newValue: SingleValue<IOptions>) => {
    if (newValue && newValue.value.toLowerCase() === options[0].value.toLowerCase()) {
      const sortedByDate = sortByDate(mockOrders);
      setOrders(sortedByDate);
    } else if (newValue) {
      const filteredOrders = mockOrders.filter((order) => order.status === newValue.label);
      const sortedByDate = sortByDate(filteredOrders);
      setOrders(sortedByDate);
    }

    if (newValue && newValue.value.toLowerCase() === options[5].value.toLowerCase()) {
      const filteredOrders = filterOrdersLastMonths(mockOrders, 1);
      const sortedByDate = sortByDate(filteredOrders);
      setOrders(sortedByDate);
    }

    if (newValue && newValue.value.toLowerCase() === options[6].value.toLowerCase()) {
      const filteredOrders = filterOrdersLastMonths(mockOrders, 6);
      const sortedByDate = sortByDate(filteredOrders);
      setOrders(sortedByDate);
    }

    if (newValue && newValue.value.toLowerCase() === options[7].value.toLowerCase()) {
      const filteredOrders = filterOrdersFor2023(mockOrders);
      const sortedByDate = sortByDate(filteredOrders);
      setOrders(sortedByDate);
    }

    setSelectedRow(null);
  };

  const handleRowClick = (id: number) => setSelectedRow(id);

  return (
    <div className={styles.orderContainer}>
      <div className={styles.aboveTableBlock}>
        <h2 className={styles.title}>Order History</h2>
        <label className={styles.selectComponent}>
          <span>Sort:</span>
          <Select
            options={options}
            onChange={handChangeOtion}
            defaultOption={{ value: 'all orders', label: 'All Orders' }}
            indicatorSeparatorStyle={indicatorSeparatorStyle}
            // @ts-ignore
            indicatorContainerStyle={indicatorContainerStyle}
            containerStyle={containerStyle}
            controlStyle={controlStyles}
            // @ts-ignore
            dropdownIndicatorStyle={dropdownIndicatorStyle}
            menuStyle={menuStyle}
            // @ts-ignore
            optionStyle={optionStyle}
          />
        </label>
      </div>
      <Table orders={orders} handleRowClick={handleRowClick} selectedRow={selectedRow} />
    </div>
  );
};
