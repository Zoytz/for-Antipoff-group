import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App/App';
import { HashRouter } from 'react-router-dom';
import { store } from '../src/store/index';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
