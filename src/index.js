import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

function productReducer(state = { selectedProduct: undefined, foundProducts: [] }, action) {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return { selectedProduct: action.payload }
    case 'PRODUCTS':
      return { foundProducts: action.payload }
    default:
      return state
  }
}

let store = createStore(productReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
