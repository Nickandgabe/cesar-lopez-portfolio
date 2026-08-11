import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'carScene',
  initialState: {
    introVideo: true,
    value: 0,
  },
  reducers: {
    toggleIntroVideo: (state, action) => {
      state.introVideo = action.payload;
    },
  },
});

export const { toggleIntroVideo } = slice.actions;

// Selectors
export const selectVideoIntro = (state) => state.carScene.introVideo;

export default slice.reducer;
