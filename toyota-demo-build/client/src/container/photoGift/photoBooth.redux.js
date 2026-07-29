import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'photoBooth',
  initialState: {
    currentPhoto: '',
    currentPhotoGrid: [],
    preBgRemovalPhoto: '',
    // gridBgRemoval: '',
    selectedBackground: 1,
  },
  reducers: {
    storeCurrentPhoto: (state, action) => {
      state.preBgRemovalPhoto = action.payload;
    },
    storeCurrentPhotoGrid : (state, action) => {
      state.currentPhotoGrid = action.payload;
    },
    fetchPhotoGridBgRemoval : (state, action) => {
      state.currentPhotoGrid = action.payload;
    },
    fetchBackgroundRemoval: (state, action) => {
      state.currentPhoto = action.payload;
    },
    resetState: (state) => {
      state.currentPhoto = '';
      state.currentPhotoGrid = [];
      state.preBgRemovalPhoto = '';
      state.selectedBackground = 1;
    }
  },
});

export const { fetchBackgroundRemoval, storeCurrentPhoto, resetState, storeCurrentPhotoGrid } = slice.actions;

// Selectors
export const selectPreBgRemovalPhoto = (state) => state.photoBooth.preBgRemovalPhoto;
export const selectCurrentPhoto = (state) => state.photoBooth.currentPhoto;
export const selectCurrentPhotoGrid = (state) => state.photoBooth.currentPhotoGrid;
export const selectCurrentBackground = (state) => state.photoBooth.selectedBackground;
// export const selectCurrentBackground = (state) => state.photoBooth.gridBgRemoval;

export default slice.reducer;
