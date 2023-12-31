import { CSSProperties } from 'react';
import { SingleValue } from 'react-select';

export interface IProfileItem {
  id: number;
  name: string;
  path: string;
  page: string;
  icon: string;
}

export interface ISidebar {
  activeTab: string;
  onTabClick: (page: string) => void;
}

export interface IOptions {
  value: string;
  label: string;
}

export interface IOrder {
  id: number;
  number: string;
  date: string;
  total: string;
  status: string;
  address: string;
  recipient: string;
  phone: string;
}

export interface IReceipt {
  image: string;
  name: string;
  info: string;
  item_no: string;
  price: string;
  quantity: string;
  total: string;
}

export interface IFormDelivery {
  country?: string;
  city?: string;
  street?: string;
  region?: string;
  zipCode?: string;
  building?: string;
  unit?: string;
  phoneNumber?: string;
}
