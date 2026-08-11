import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/style/main.scss';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './store/index';
import AppRouter from './router';

import ReactGA from 'react-ga';

let persistor = persistStore(store);
//import reportWebVitals from "./reportWebVitals";

const trackingId = "UA-197150151-1"; // Replace with your Google Analytics tracking ID

if(window.location.origin.toLocaleLowerCase() === "https://toyotaautoshow.com") {
  ReactGA.initialize(trackingId);
}


// eslint-disable-next-line
Modernizr.on('webp', function (result) {
  if (result) {
    window.webp = true;
  } else {
    window.webp = false;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
