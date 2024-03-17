import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer from './redux';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
