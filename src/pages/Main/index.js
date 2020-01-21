import React, { useState, useEffect } from 'react';
import { MdLocalGroceryStore as Icon } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';

import api from '~/services/api';

import { addToCartRequest } from '~/store/modules/cart/actions';

import Carousel from '~/components/Carousel';
import Footer from '~/components/Footer';

export default function Main() {
  const [products, setProducts] = useState([]);

  const currentState = useSelector(state => state.cart.items);
  const newAmount = currentState.reduce((sum, pdt) => {
    sum[pdt.id] = pdt.amount;
    return sum;
  }, {});

  // console.tron.log(currentState);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get('products');

      const formatedList = response.data.map(product => {
        const priceFormated = parseFloat(product.price.replace(',', '.'));
        const priceWithDiscount = (
          priceFormated -
          (product.discount / 100) * priceFormated
        ).toLocaleString('pt-br', {
          maximumFractionDigits: 2,
        });

        return {
          ...product,
          priceWithDiscount,
        };
      });

      setProducts(formatedList);
    };

    loadProducts();
  }, []);

  const handleAddToCart = product => {
    dispatch(addToCartRequest(product));
  };

  return (
    <>
      <S.Container>
        <Carousel />

        <S.ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.pics[0].path} alt={product.name} />
              <strong>{product.name}</strong>
              <div className="card-footer">
                <div className="price">
                  <span className="original-price">De: R${product.price}</span>
                  <span className="current-price">
                    Por: R$
                    <strong>{product.priceWithDiscount}</strong>
                  </span>
                </div>
                <div className="division">
                  <span>|</span>
                  <span>ou</span>
                  <span>|</span>
                </div>
                <div className="card">
                  <span className="card-price">
                    R${product.priceWithDiscount}
                  </span>
                  <span className="card-description">no cartão à vista</span>
                </div>
              </div>
              <button type="button" onClick={() => handleAddToCart(product.id)}>
                <div>
                  <Icon color="#fff" size={20} /> {newAmount[product.id] || 0}
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))}
        </S.ProductList>
      </S.Container>
      <Footer />
    </>
  );
}
