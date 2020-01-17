import React from 'react';

import * as S from './styles';

import Carousel from '~/components/Carousel';

export default function Main() {
  return (
    <S.Container>
      <Carousel />
      <h1>Main</h1>
    </S.Container>
  );
}
