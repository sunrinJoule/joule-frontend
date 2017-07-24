import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';

import './style/index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

// Create store
let store = configureStore(undefined, 'ws://localhost:8000');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
