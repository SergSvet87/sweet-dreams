import { create } from 'zustand';

import { closeModal } from '../modalOrder/index.js';
import { clearOrder } from '../order/orderSlice.js';

const initialState = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  address: '',
};

export const submitForm = createAsyncThunk(
  'form/submit',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch('https://cloudy-slash-rubidium.glitch.me/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Ошибка: ${res.statusText}`);
      }

      dispatch(clearOrder());
      dispatch(closeModal());

      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const formOrderStore = create((set) => ({
  // name: "formOrder",
  initialState,
  controls: {
    name: () => set(({ name }) => ({ name: name })),
    decrement: () => set(({ count }) => ({ count: count - 1 })),
    reset: () => set({ count: 0 }),
  },
}));

export const { updateFormValue } = formDeliverySlice.actions;

export default formDeliverySlice.reducer;
