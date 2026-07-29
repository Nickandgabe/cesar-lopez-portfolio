import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'spinToWin',
  initialState: {
    spinToWinOpen: false,
    startSurvey:false,
    userInfo: {
      name: '',
      lastName: '',
      email: ''
    },
    cupon: 0,
  },
  reducers: {
    userInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    storeCupon: (state, action) => {
      state.cupon = action.payload;
    },
    toggleSpinToWin: (state, action) => {
      state.spinToWinOpen = action.payload;
    },
    toggleStartSurvey: (state, action) => {
      state.startSurvey = action.payload;
    }
  },
});

export const { toggleSpinToWin } = slice.actions;
export const { toggleStartSurvey } = slice.actions;


// Selectors
export const selectCupon = (state) => state.spinToWin.cupon;

// Selectors
export const selectStartSurvey = (state) => state.spinToWin.startSurvey;
export const selectSpintoWin = (state) => state.spinToWin.spinToWinOpen;

export const { userInfo, storeCupon } = slice.actions;


export default slice.reducer;
