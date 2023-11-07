import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { instance } from '@/utils/client';

const initialState = {
  user: [],
  error: '',
  isLogged: false,
};

export const userRequestAsync = createAsyncThunk('user/fetch', async () => {
  try {
    const req = await instance.get(`User`);
    return await req.json();
  } catch (error) {
    return { error };
  }
});

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLogged = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(userRequestAsync.fulfilled, (state, action) => {
        state.error = '';
        state.user = action.payload;
      })
      .addCase(userRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
