import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { instance } from '@/utils/client';

const initialState = {
  category: [],
  error: '',
  activeCategory: 0,
};

export const categoryRequestAsync = createAsyncThunk('category/fetch', async () => {
  try {
    const req = await instance.get(`category`);
    return await req.json();
  } catch (error) {
    return { error };
  }
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.activeCategory = action.payload.indexCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(categoryRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.category = action.payload;
      })
      .addCase(categoryRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;
