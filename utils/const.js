import {
  BsFillPersonFill,
  BsFillGearFill,
  BsBoxArrowRight,
  BsFillPersonCheckFill,
  BsFillPersonPlusFill,
} from 'react-icons/bs';

export const MOBILE_MENU = [
  {
    id: 1,
    name: 'головна',
    page: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'про нас',
    page: 'about',
    path: '/about',
  },
  {
    id: 6,
    name: 'закрити',
    page: 'close',
    path: '/',
  },
];

export const MENU = [
  {
    id: 1,
    name: 'головна',
    page: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'про нас',
    page: 'about',
    path: '/about',
  },
];

export const MENU_PROFILE_AUTH = [
  {
    id: 1,
    name: 'реєстрація',
    page: 'registr',
    path: '/registr',
    icon: <BsFillPersonCheckFill />,
  },
  {
    id: 2,
    name: 'авторизація',
    page: 'auth',
    path: '/auth',
    icon: <BsFillPersonPlusFill />,
  },
];

export const MENU_PROFILE = [
  {
    id: 1,
    name: 'профіль',
    page: 'profile',
    path: '/profile',
    icon: BsFillPersonFill,
  },
  {
    id: 2,
    name: 'налаштування',
    page: 'settings',
    path: '/settings',
    icon: BsFillGearFill,
  },
  {
    id: 3,
    name: 'вихід',
    page: 'exit',
    path: '/exit',
    icon: BsBoxArrowRight,
  },
];
