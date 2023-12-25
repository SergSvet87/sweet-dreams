import { IOptions, IProfileItem, IOrder } from '@/types/interfaces';

export const PROFILE: IProfileItem[] = [
  {
    id: 1,
    name: 'account details',
    page: 'account',
    path: '/account',
    icon: '/images/profile/user.svg',
  },
  {
    id: 2,
    name: 'order history',
    page: 'order',
    path: '/order',
    icon: '/images/profile/order.svg',
  },
  {
    id: 3,
    name: 'favorites list',
    page: 'favorites',
    path: '/favorites',
    icon: '/images/profile/favorites.svg',
  },
  {
    id: 4,
    name: 'delivery addresses',
    page: 'delivery',
    path: '/delivery',
    icon: '/images/profile/delivery.svg',
  },
  {
    id: 5,
    name: 'payment  methods',
    page: 'payment',
    path: '/payment',
    icon: '/images/profile/payment.svg',
  },
  {
    id: 6,
    name: 'log out',
    page: 'logout',
    path: '/logout',
    icon: '/images/profile/logout.svg',
  },
];

export const options: IOptions[] = [
  { value: 'all orders', label: 'All Orders' },
  { value: 'processing', label: 'Processing' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'last month', label: 'Last Month' },
  { value: 'last 6 months', label: 'Last 6 Months' },
  { value: '2023', label: '2023' },
];

export const orders: IOrder[] = [
  { id: 1, number: '1234 5678', date: '07.12.2023', total: '₴930', status: 'Shipped' },
  { id: 2, number: '2223 5672', date: '08.12.2023', total: '₴930', status: 'Delivered' },
  { id: 3, number: '1111 5672', date: '21.10.2023', total: '₴930', status: 'Cancelled' },
  { id: 4, number: '2123 5672', date: '01.09.2022', total: '₴930', status: 'Shipped' },
  { id: 5, number: '1133 5672', date: '28.04.2022', total: '₴930', status: 'Processing' },
  { id: 6, number: '1116 5672', date: '21.07.2023', total: '₴930', status: 'Cancelled' },
  { id: 7, number: '2127 5672', date: '01.06.2023', total: '₴930', status: 'Shipped' },
  { id: 8, number: '1138 5672', date: '28.05.2023', total: '₴930', status: 'Delivered' },
  { id: 9, number: '1132 5672', date: '01.01.2022', total: '₴930', status: 'Delivered' },
  { id: 10, number: '1331 5672', date: '01.03.2023', total: '₴930', status: 'Processing' },
  { id: 11, number: '1431 5672', date: '03.08.2023', total: '₴930', status: 'Cancelled' },
  { id: 12, number: '1531 5672', date: '09.03.2022', total: '₴930', status: 'Delivered' },
];

export function filterOrdersLastMonths(orders: IOrder[], quantityMonth: number) {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - quantityMonth);

  return orders.filter((order) => {
    const orderDate = new Date(order.date.split('.').reverse().join('-'));
    return orderDate >= sixMonthsAgo;
  });
}

export function filterOrdersFor2023(orders: IOrder[]) {
  return orders.filter((order) => {
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
