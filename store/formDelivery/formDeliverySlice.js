import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { closeModal } from "../modalDelivery/modalDeliverySlice.js";
import { clearOrder } from "../order/orderSlice.js";

const initialState = {
  name: "",
  phone: "",
  format: "delivery",
  address: "",
  floor: "",
  intercom: "",
};

export const submitForm = createAsyncThunk(
  "form/submit",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://cloudy-slash-rubidium.glitch.me/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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

const formDeliverySlice = createSlice({
  name: "formDelivery",
  initialState,
  reducers: {
    updateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "loading";
        state.res = null;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = "success";
        state.res = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { updateFormValue } = formDeliverySlice.actions;

export default formDeliverySlice.reducer;
