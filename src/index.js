import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
const Store = store();
render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
