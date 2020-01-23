import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MdLocalGroceryStore as Icon } from 'react-icons/md';
import Footer from '~/components/Footer';
import { calculeDiscount } from '~/utils/format';

import * as S from './styles';
import api from '~/services/api';

export default function ProductDetail({ location }) {
  const pdt = location.state.product;

  const [size, setSize] = useState('');
  const [product, setProduct] = useState(location.state.product);
  const [draftPhoto, setDraftPhoto] = useState(product.pics[0]);

  useEffect(() => {
    const loadProduct = async () => {
      const response = await api.get(`/products?id=${pdt.id}`);

      setProduct(response.data[0]);
      setDraftPhoto(response.data[0].pics[0]);
    };

    loadProduct();
  }, [pdt.id]);

  return (
    <>
      <S.Container>
        <S.ProductHeader>
          <S.Pic>
            <div className="big-pic">
              <img src={draftPhoto.path} alt={draftPhoto.name} />
            </div>
            <div className="pic-detail">
              {product.pics.map(pic => (
                <S.MiniaturePic
                  onClick={() => setDraftPhoto(pic)}
                  isSelected={pic.name === draftPhoto.name}
                  key={pic.name}
                >
                  <img src={pic.path} alt={pic.name} />
                </S.MiniaturePic>
              ))}
            </div>
          </S.Pic>

          <S.InfoProductsToBuy>
            <h1>{product.name}</h1>

            <div className="price-detail">
              <div className="price">
                <span className="original-price">De: R${product.price}</span>
                <span className="current-price">
                  Por: R$
                  <strong>
                    {calculeDiscount(product.price, product.discount)}
                  </strong>
                </span>
              </div>
              <div className="division">
                <span>|</span>
                <span>ou</span>
                <span>|</span>
              </div>
              <div className="card">
                <span className="card-price">
                  R${calculeDiscount(product.price, product.discount)}
                </span>
                <span className="card-description">no cartão à vista</span>
              </div>
            </div>

            {product.sizes.length > 0 && (
              <div className="sizes">
                <div className="size-hosen">
                  Tamanho: <span>{size}</span>
                </div>
                <div className="size-to-Choose">
                  {product.sizes.map(sizeParam => (
                    <S.ButtonSize
                      isSelected={sizeParam.initials === size}
                      type="button"
                      onClick={() => setSize(sizeParam.initials)}
                      key={sizeParam.initials}
                    >
                      {sizeParam.initials}
                    </S.ButtonSize>
                  ))}
                </div>
              </div>
            )}

            <button type="button">
              <span>Comprar</span>
              <Icon color="#fff" size={20} />
            </button>
          </S.InfoProductsToBuy>
        </S.ProductHeader>

        <S.ProductDetail>
          <h2>Detalhes</h2>

          <div className="text-detail">
            <p className="wrapper">{product.description}</p>
          </div>
        </S.ProductDetail>
      </S.Container>
      <Footer />
    </>
  );
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
