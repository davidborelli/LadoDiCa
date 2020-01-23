import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Trash } from 'styled-icons/evil/Trash';
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown';
import { KeyboardArrowUp } from 'styled-icons/material/KeyboardArrowUp';
import { MoneyOff } from 'styled-icons/material/MoneyOff';
import { CheckCircle } from 'styled-icons/boxicons-regular/CheckCircle';
import { MdLocalGroceryStore as Icon } from 'react-icons/md';
import {
  addCuponDiscountCartRequest,
  removeFromCart,
  updateAmountRequest,
  openCloseModal,
  cleanCart,
} from '~/store/modules/cart/actions';

import history from '~/services/history';

import { calculeDiscount, strToMoney } from '~/utils/format';
import Modal from '~/components/Modal';

import * as S from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const modalOpenedOrClosed = useSelector(state => state.cart.modal);

  const [cuponDiscount, setCuponDiscount] = useState('');

  const cartItems = useSelector(state =>
    state.cart.items.map(product => ({
      ...product,
      subtotal: calculeDiscount(
        product.price,
        product.discount,
        product.amount
      ),
    }))
  );

  const subtotal = useSelector(state =>
    state.cart.items
      .reduce((totalSum, product) => {
        const { price, discount, amount } = product;
        const formatedDiscount = strToMoney(
          calculeDiscount(price, discount, amount)
        );

        return totalSum + formatedDiscount;
      }, 0)
      .toLocaleString('pt-br', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
  );

  const coupon = useSelector(state =>
    state.cart.coupon ? state.cart.coupon : {}
  );

  const total = useMemo(() => calculeDiscount(subtotal, coupon.discount || 0), [
    coupon,
    subtotal,
  ]);

  const valorDesconto = useMemo(
    () =>
      ((coupon.discount / 100) * strToMoney(subtotal)).toLocaleString('pt-br', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    [coupon.discount, subtotal]
  );

  const handleDeleteCartItem = cartItem => {
    dispatch(removeFromCart(cartItem.id));
  };

  const handleUpdateCartItem = (cartItem, qtd) => {
    dispatch(updateAmountRequest(cartItem.id, qtd));
  };

  const handleCuponDiscount = async () => {
    dispatch(addCuponDiscountCartRequest(cuponDiscount));
  };

  const handleCheckout = () => {
    dispatch(openCloseModal());
  };

  const handleConfirm = () => {
    dispatch(openCloseModal());
    dispatch(cleanCart());
    history.push('/');
  };

  return (
    <S.Container>
      <S.Header>
        <h1>
          Carrinho de compras{' '}
          <span>
            ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})
          </span>
        </h1>
        <button type="button" onClick={handleCheckout}>
          Finalizar Compra
        </button>
      </S.Header>
      <S.CartBody>
        <S.ProductTable>
          <thead>
            <tr>
              <th>Item(ns)</th>
              <th />
              <th>Preço</th>
              <th>Quant.</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(cartItem => (
              <tr key={cartItem.id}>
                <td>
                  <Link
                    to={{
                      pathname: `/detail/${cartItem.id}`,
                      state: { product: cartItem },
                    }}
                  >
                    <img src={cartItem.pics[0].path} alt={cartItem.name} />
                  </Link>
                </td>
                <td className="description">{cartItem.name}</td>
                <td>R$ {calculeDiscount(cartItem.price, cartItem.discount)}</td>
                <td>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleDeleteCartItem(cartItem)}
                    >
                      <Trash size={35} />
                    </button>
                    <input type="text" disabled value={cartItem.amount} />
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateCartItem(cartItem, cartItem.amount + 1)
                        }
                      >
                        <KeyboardArrowUp size={25} />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateCartItem(cartItem, cartItem.amount - 1)
                        }
                      >
                        <KeyboardArrowDown size={25} />
                      </button>
                    </div>
                  </div>
                </td>
                <td>R$ {cartItem.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </S.ProductTable>

        <S.CartFooter>
          <div className="coupon">
            <span>
              <MoneyOff size={15} /> Aplicar cupom
            </span>
            <div className="coupon-detail">
              <span>Informe aqui seu cupom promocional</span>
              <input
                onChange={event => setCuponDiscount(event.target.value)}
                type="text"
              />
              <button onClick={handleCuponDiscount} type="button">
                Aplicar cupom
              </button>
            </div>
          </div>

          <div className="totals">
            <hr />
            <span className="subtotal">
              Subtotal <span>R${subtotal}</span>
            </span>
            <hr hidden={!coupon.name} />
            <S.Discount hidden={!coupon.name}>
              Desconto -{coupon.discount}% do cupom {coupon.name}
              <span>R${valorDesconto}</span>
            </S.Discount>
            <hr />
            <span className="grand-total">
              Total Geral <strong>R$ {total}</strong>
            </span>
          </div>
        </S.CartFooter>
      </S.CartBody>
      <S.PageFooter>
        <Link to="/" className="continue-buy">
          <Icon size={15} />
          Continuar comprando
        </Link>
        <button className="finish-buy" type="button" onClick={handleCheckout}>
          Finalizar Compra
        </button>
      </S.PageFooter>
      {modalOpenedOrClosed && (
        <Modal fnOnClose={handleConfirm}>
          <div className="check-container">
            <div className="check-img">
              <CheckCircle size={90} color="#74b667" />
            </div>
            <div className="check-text">
              <h1>Compra realizada com sucesso!</h1>
              <p>
                Agradecemos pela preferência !! Agora falta pouco, em breve você
                receberá seu produtinho Lado-DiCá!!
              </p>
            </div>
          </div>
        </Modal>
      )}
    </S.Container>
  );
}
