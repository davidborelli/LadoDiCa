import React from 'react';

import { MdLocalGroceryStore as Icon } from 'react-icons/md';
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
            <div className="card-footer">
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
            <button type="button">
              <div>
                <Icon color="#fff" size={20} /> 0
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <div className="card-footer">
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
            <button type="button">
              <div>
                <Icon color="#fff" size={20} /> 0
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <div className="card-footer">
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
            <button type="button">
              <div>
                <Icon color="#fff" size={20} /> 0
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <div className="card-footer">
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
            <button type="button">
              <div>
                <Icon color="#fff" size={20} /> 0
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <div className="card-footer">
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
            <button type="button">
              <div>
                <Icon color="#fff" size={20} /> 0
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
          <li>
            <img src={ImagemTeste} alt="Body" />
            <strong>
              Body Personalizado Rendado+Tiara - Coroa princesa Vermelho
            </strong>
            <div className="card-footer">
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
            <button type="button">
              <div>
                <Icon color="#fff" size={20} /> 0
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        </S.ProductList>
      </S.Container>
      <Footer />
    </>
  );
}
