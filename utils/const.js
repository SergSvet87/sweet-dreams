import {
  BsFillPersonFill,
  BsFillGearFill,
  BsBoxArrowRight,
  BsFillPersonCheckFill,
  BsFillPersonPlusFill,
} from 'react-icons/bs';

export const TIME_SHOW_PASSWORD = 5000;
export const TIME_SHOW_HOME_ANIMATION = 8000;

export const MOBILE_MENU = [
  {
    id: 1,
    name: 'Candies',
    page: 'candies',
    path: '/candies',
  },
  {
    id: 2,
    name: 'Chocolates',
    page: 'chocolates',
    path: '/chocolates',
  },
  {
    id: 3,
    name: 'Delivery',
    page: 'delivery',
    path: '/delivery',
  },
  {
    id: 4,
    name: 'Our team',
    page: 'our team',
    path: '/ourTeam',
  },
];

export const MENU = [
  {
    id: 1,
    name: 'Candies',
    page: 'candies',
    path: '/candies',
  },
  {
    id: 2,
    name: 'Chocolates',
    page: 'chocolates',
    path: '/chocolates',
  },
  {
    id: 3,
    name: 'Delivery',
    page: 'delivery',
    path: '/delivery',
  },
  {
    id: 4,
    name: 'Our team',
    page: 'our team',
    path: '/ourTeam',
  },
];

export const MENU_PROFILE_AUTH = [
  {
    id: 1,
    name: 'login',
    page: 'login',
    path: '/auth/login',
    icon: <BsFillPersonCheckFill />,
  },
  {
    id: 2,
    name: 'registration',
    page: 'registration',
    path: '/auth/registration',
    icon: <BsFillPersonPlusFill />,
  },
];

export const MENU_PROFILE = [
  {
    id: 1,
    name: 'profile',
    page: 'profile',
    path: '/profile',
    icon: <BsFillPersonFill />,
  },
  {
    id: 2,
    name: 'exit',
    page: 'exit',
    path: '/',
    icon: <BsBoxArrowRight />,
  },
];
