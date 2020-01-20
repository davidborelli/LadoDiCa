import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '~/styles/global';
import '~/config/ReactotronConfig';

import store from './store';

import Header from '~/components/Header';
import Category from '~/components/Category';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Category />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}
