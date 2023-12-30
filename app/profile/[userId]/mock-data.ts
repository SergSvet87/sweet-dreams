import { IFormDelivery, IReceipt } from '@/types/interfaces/profile';

export const receipt: IReceipt[] = [
  {
    image: '/images/products/card_1.png',
    name: 'Candy Bird',
    info: 'Box of 10',
    item_no: '112',
    price: '₴270',
    quantity: '1',
    total: '₴270',
  },
  {
    image: '/images/products/card_2.png',
    name: 'Chocolate Star',
    info: 'Box of 6',
    item_no: '113',
    price: '₴150',
    quantity: '2',
    total: '₴300',
  },
  {
    image: '/images/products/card_3.png',
    name: 'Fruit Mix',
    info: 'Bag of 20',
    item_no: '114',
    price: '₴100',
    quantity: '3',
    total: '₴300',
  },
];

export const mockAddress: IFormDelivery[] = [
  {
    country: 'Ukraine',
    region: 'Desnjansky district',
    zipCode: '02225',
    city: 'Kyiv',
    street: 'Mayakovski',
    building: '10A',
    unit: '111',
    phoneNumber: '+380507620564',
  },
];
