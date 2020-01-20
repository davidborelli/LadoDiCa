import React from 'react';

import { MdLocalGroceryStore as Icon } from 'react-icons/md';
import Footer from '~/components/Footer';

import ImagemTeste from '~/images/carousel1.jpeg';
import * as S from './styles';

export default function ProductDetail() {
  return (
    <>
      <S.Container>
        <S.ProductHeader>
          <S.Pic>
            <div className="big-pic">
              <img src={ImagemTeste} alt="big" />
            </div>
            <div className="pic-detail">
              <div>
                <img src={ImagemTeste} alt="Test" />
              </div>
              <div>
                <img src={ImagemTeste} alt="Test" />
              </div>
              <div>
                <img src={ImagemTeste} alt="Test" />
              </div>
              <div>
                <img src={ImagemTeste} alt="Test" />
              </div>
            </div>
          </S.Pic>

          <S.InfoProductsToBuy>
            <h1>Kit Body Bebê 3 Peças Flamingo Branco - Club B</h1>

            <div className="price-detail">
              <div className="price">
                <span className="original-price">De: R$128,89</span>
                <span className="current-price">
                  Por: R$<strong>120,89</strong>
                </span>
              </div>
              <div className="division">
                <span>|</span>
                <span>ou</span>
                <span>|</span>
              </div>
              <div className="card">
                <span className="card-price">R$119,19</span>
                <span className="card-description">no cartão à vista</span>
              </div>
            </div>

            <div className="sizes">
              <div className="size-hosen">Tamanho:</div>
              <div className="size-to-Choose">
                <span>P</span>
                <span>M</span>
                <span>G</span>
                <span>GG</span>
              </div>
            </div>

            <button type="button">
              <span>Comprar</span>
              <Icon color="#fff" size={20} />
            </button>
          </S.InfoProductsToBuy>
        </S.ProductHeader>

        <S.ProductDetail>
          <h2>Detalhes</h2>

          <div className="text-detail">
            <ul>
              <li>
                <strong>Bodies:</strong>
              </li>
              <li>
                Fabricados em 85% algodão e 15% pode variar entre outras fibras;
              </li>
              <li>Gola redonda;</li>
              <li>Estampa frontal.</li>
            </ul>
            <ul>
              <li>
                <strong>Calça:</strong>
              </li>
              <li>
                Fabricada em 85% algodão e 15% pode variar entre outras fibras;
              </li>
              <li>Cor lisa;</li>
              <li>Cós com elástico.</li>
            </ul>
            <ul>
              <li>
                <strong>Cuidados:</strong>
              </li>
              <li>Lavar com cores similares;</li>
              <li>Passar somente pelo avesso;</li>
              <li>Não usar alvejante.</li>
            </ul>{' '}
          </div>
        </S.ProductDetail>
      </S.Container>
      <Footer />
    </>
  );
}
