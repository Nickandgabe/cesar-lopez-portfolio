import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 't360Scene',
  initialState: {
    introVideoLanding: true,
    value: 0,
  },
  reducers: {
    toggleIntroVideo: (state, action) => {
      state.introVideoLanding = action.payload;
    },
  },
});

export const { toggleIntroVideo } = slice.actions;

// Selectors
export const selectVideoIntro = (state) => state.t360Scene.introVideoLanding;

export default slice.reducer;
