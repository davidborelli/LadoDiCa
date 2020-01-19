import React from 'react';

import * as S from './styles';
import ImagemTeste from '~/images/carousel1.jpeg';

import Carousel from '~/components/Carousel';
import Footer from '~/components/Footer';

export default function Main() {
  return (
    <>
      <S.Container>
        <Carousel />

        <S.ProductList>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <span>R$128,89</span>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <span>R$128,89</span>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <span>R$128,89</span>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <span>R$128,89</span>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <span>R$128,89</span>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <span>R$128,89</span>
          </li>
        </S.ProductList>
      </S.Container>
      <Footer />
    </>
  );
}
