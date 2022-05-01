import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FontStyles from './fonts';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial;
  }
  img {
    width: 100%;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FontStyles />
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
