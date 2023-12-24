import { ProfileItemI } from '@/types/interfaces';

export const PROFILE: ProfileItemI[] = [
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
