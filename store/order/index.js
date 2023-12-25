import { create } from 'zustand';

import { calcTotal } from '@/utils/calcTotal';

const useOrderStore = create((set) => ({
  // orderList: JSON.parse(localStorage.getItem('order') || '[]'),
  orderGoods: [
    {
      id: 1,
      image: '/images/products/card_6.png',
      title: 'Swirl Sweets',
      quantity: 'Box of 10',
      code: '123',
      price: '200',
      count: 2,
      total: '400',
    },
    {
      id: 2,
      image: '/images/products/card_2.png',
      title: 'Swirl Sweets2',
      quantity: 'Box of 10',
      code: '125',
      price: '300',
      count: 3,
      total: '900',
    },
    {
      id: 3,
      image: '/images/products/card_3.png',
      title: 'Swirl Sweets3',
      quantity: 'Box of 10',
      code: '127',
      price: '300',
      count: 3,
      total: '900',
    },
    {
      id: 4,
      image: '/images/products/card_4.png',
      title: 'Swirl Sweets4',
      quantity: 'Box of 10',
      code: '129',
      price: '400',
      count: 1,
      total: '400',
    },
  ],
  price: 0,
  count: 1,
  subTotal: 2600,
  loading: false,
  error: null,
  addProduct: (id) =>
    set((state) => {
      const productOrderGoods = state.orderGoods.find((item) => item.id === id);
      productOrderGoods.count += 1;

      [state.count, state.price, state.subTotal] = calcTotal(state.orderGoods);
    }),
  removeProduct: (id) =>
    set((state) => {
      const productOrderGoods = state.orderGoods.find((item) => item.id === id);
      productOrderGoods.count -= 1;

      [state.count, state.price, state.subTotal] = calcTotal(state.orderGoods);
    }),
  //  {
  // const productOrderList = state.orderList.find(
  //   (item) => item.id === action.payload.id
  // );
  // if (productOrderList.count > 1) {
  //   productOrderList.count -= 1;
  //   const productOrderGoods = state.orderGoods.find(
  //     (item) => item.id === action.payload.id
  //   );
  //   productOrderGoods.count = productOrderList.count;
  //   [state.totalCount, state.totalPrice] = calcTotal(state.orderGoods);
  // } else {
  //   state.orderList = state.orderList.filter(
  //     (item) => item.id !== action.payload.id
  //   );
  // }
  // },
  // clearItem: (id) => set({
  //   orderList = [];
  //   orderGoods = [];
  // }),
}));

export default useOrderStore;
