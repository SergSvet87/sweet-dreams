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
    name: 'shop now',
    page: 'shop now',
    path: '/shop',
  },
  {
    id: 2,
    name: 'Delivery',
    page: 'delivery',
    path: '/delivery',
  },
  {
    id: 3,
    name: 'Our team',
    page: 'team',
    path: '/team',
  },
];

export const MENU = [
  {
    id: 1,
    name: 'Home',
    page: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'shop now',
    page: 'shop now',
    path: '/shop',
  },
  // {
  //   id: 3,
  //   name: 'Chewies',
  //   page: 'chewies',
  //   path: '/chewies',
  // },
  // {
  //   id: 4,
  //   name: 'Jellies',
  //   page: 'jellies',
  //   path: '/jellies',
  // },
  // {
  //   id: 5,
  //   name: 'Chocolates',
  //   page: 'chocolates',
  //   path: '/chocolates',
  // },
  {
    id: 3,
    name: 'Delivery',
    page: 'delivery',
    path: '/delivery',
  },
  {
    id: 4,
    name: 'Our team',
    page: 'team',
    path: '/team',
  },
];
export const SUB_MENU = [
  {
    id: 1,
    name: 'Candies',
    page: 'Candies',
    path: '/shop',
  },
  {
    id: 2,
    name: 'Lollies',
    page: 'Lollies',
    path: '/shop',
  },
  {
    id: 3,
    name: 'Chewies',
    page: 'chewies',
    path: '/shop',
  },
  {
    id: 4,
    name: 'Jellies',
    page: 'jellies',
    path: '/shop',
  },
  {
    id: 5,
    name: 'Chocolates',
    page: 'chocolates',
    path: '/shop',
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
