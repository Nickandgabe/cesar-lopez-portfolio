import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'Loader',
  initialState: {
    isLoading: true,
    value: 0,
  },
  reducers: {
    setAssetLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAssetLoader } = slice.actions
export const selectAssetLoader = (state) => state.Loader.isLoading;

export default slice.reducer;
