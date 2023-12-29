import { IOptions, IProfileItem, IOrder } from '@/types/interfaces/profile';

export const defaultSetDropList = { value: 'all orders', label: 'All Orders' };
export function filterOrdersLastMonths(orders: IOrder[], quantityMonth: number) {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - quantityMonth);

  return orders.filter(order => {
    const orderDate = new Date(order.date.split('.').reverse().join('-'));
    return orderDate >= sixMonthsAgo;
  });
}

export function filterOrdersFor2023(orders: IOrder[]) {
  return orders.filter(order => {
    const orderYear = new Date(order.date.split('.').reverse().join('-')).getFullYear();
    return orderYear === 2023;
  });
}

export function sortByDate(orders: IOrder[]) {
  const sorted = orders.sort((a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
  });
  return sorted;
}
