import { SingleValue } from 'react-select';
import { IOptions, IOrder } from '@/types/interfaces/profile';
import {
  sortByDate,
  filterOrdersLastMonths,
  filterOrdersFor2023,
} from '@/app/profile/[userId]/helpers';
import { Dispatch, SetStateAction } from 'react';

export const handleChangeOption = (
  newValue: SingleValue<IOptions>,
  setOrders: Dispatch<SetStateAction<IOrder[]>>,
  setSelectedRow: Dispatch<SetStateAction<number | null>>,
  mockOrders: IOrder[],
  options: IOptions[]
) => {
  if (newValue && newValue.value.toLowerCase() === options[0].value.toLowerCase()) {
    const sortedByDate = sortByDate(mockOrders);
    setOrders(sortedByDate);
  } else if (newValue) {
    const filteredOrders = mockOrders.filter(order => order.status === newValue.label);
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
