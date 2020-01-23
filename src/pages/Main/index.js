import React, { useState, useEffect, useMemo } from 'react';
import { MdLocalGroceryStore as Icon } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { calculeDiscount } from '~/utils/format';
import * as S from './styles';

import api from '~/services/api';

import { addToCartRequest } from '~/store/modules/cart/actions';

import Carousel from '~/components/Carousel';
import Footer from '~/components/Footer';

export default function Main({ location }) {
  const category = location.state ? location.state.category : null;

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const currentState = useSelector(state => state.cart.items);
  const newAmount = currentState.reduce((sum, pdt) => {
    sum[pdt.id] = pdt.amount;
    return sum;
  }, {});

  useEffect(() => {
    const loadProducts = async () => {
      const response = await api.get('products');

      const formatedList = response.data.map(product => {
        const { price, discount } = product;
        const priceWithDiscount = calculeDiscount(price, discount);

        return {
          ...product,
          priceWithDiscount,
        };
      });

      setProducts(formatedList);
    };

    loadProducts();
  }, []);

  const productsFiltered = useMemo(
    () =>
      category
        ? products.filter(product => product.category.name === category.name)
        : products,
    [category, products]
  );

  const handleAddToCart = product => {
    dispatch(addToCartRequest(product));
  };

  return (
    <>
      <S.Container>
        <Carousel />

        <S.ProductList>
          {productsFiltered.map(product => (
            <li key={product.id}>
              <Link
                to={{ pathname: `/detail/${product.id}`, state: { product } }}
              >
                <img src={product.pics[0].path} alt={product.name} />
                <strong>{product.name}</strong>
                <div className="card-footer">
                  <div className="price">
                    <span className="original-price">
                      De: R${product.price}
                    </span>
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
              </Link>
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

Main.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
