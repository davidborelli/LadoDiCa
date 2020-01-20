import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '~/styles/global';

import Header from '~/components/Header';
import Category from '~/components/Category';

import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Category />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
