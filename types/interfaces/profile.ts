import { CSSProperties } from 'react';
import { ActionMeta, CSSObjectWithLabel, SingleValue } from 'react-select';

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

export interface IOrderHistory {}

export interface ISelect {
  options: IOptions[];
  onChange: (newValue: SingleValue<IOptions>) => void;
  defaultOption?: IOptions;
  placeholder?: string;
  indicatorSeparatorStyle?: CSSProperties;
  controlStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  indicatorContainerStyle?: CSSProperties;
  dropdownIndicatorStyle?: CSSProperties;
  menuStyle?: CSSProperties;
  optionStyle?: CSSProperties;
  selectedColor?: string;
  hideSelectedOptions?: boolean;
  isSearchable?: boolean;
}

export interface IProfileOrderTable {
  orders: IOrder[];
  handleRowClick: (id: number) => void;
  selectedRow: number | null;
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

export interface IAddressForm {
  form: IFormDelivery;
  index: number;
  handleInputChange: (index: number, field: keyof IFormDelivery, value: string) => void;
  removeForm: (index: number) => void;
  isFormFilled: (form: IFormDelivery) => boolean;
}
