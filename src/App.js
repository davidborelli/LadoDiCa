import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Router } from 'react-router-dom';
import history from '~/services/history';

import GlobalStyle from '~/styles/global';
import '~/config/ReactotronConfig';

import store from './store';

import Header from '~/components/Header';
import Category from '~/components/Category';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Category />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}
