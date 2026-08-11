import { configureStore } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// // persist storage
import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storageSession from 'redux-persist/lib/storage/session';
// import storage from 'redux-persist/lib/storage';

// Reducers
import carScene from './../container/mainCarScene/mainCarScene.redux';
import t360Scene from './../container/T360/t360.redux';
import spinToWin from './../container/spinToWin/spinToWin.redux';
import photoBooth from './../container/photoGift/photoBooth.redux';

import loaderState from './gobal'


export const history = createBrowserHistory();

const reducers = combineReducers({
  router: connectRouter(history),
  carScene,
  t360Scene,
  spinToWin,
  loaderState,
  photoBooth
});

const persistConfig = {
  key: 'toyota-autoshow',
  storage: storageSession,
  stateReconciler: hardSet,
  // timeout: null,
  blacklist: ['photoBooth'],
};

const persistedReducer = persistReducer(persistConfig, reducers); // eslint-disable-line

const store = configureStore({
  // reducer: {
  //     router: connectRouter(history),
  //     carScene: carScene
  // },
  reducer: persistedReducer,
  // middleware: [thunk, logger],
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

window.store = store;

export default store;
