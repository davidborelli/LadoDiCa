import React from 'react';

import { Trash } from 'styled-icons/evil/Trash';
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown';
import { KeyboardArrowUp } from 'styled-icons/material/KeyboardArrowUp';
import { MoneyOff } from 'styled-icons/material/MoneyOff';
import { MdLocalGroceryStore as Icon } from 'react-icons/md';

import ImagemTeste from '~/images/carousel1.jpeg';

import * as S from './styles';

export default function Cart() {
  return (
    <S.Container>
      <S.Header>
        <h1>
          Carrinho de compras <span>(1 item)</span>
        </h1>
        <button type="button">Finalizar Compra</button>
      </S.Header>
      <S.CartBody>
        <S.ProductTable>
          <thead>
            <th>Item(ns)</th>
            <th />
            <th>Preço</th>
            <th>Quant.</th>
            <th>Subtotal</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={ImagemTeste} alt="teste" />
              </td>
              <td>Kit Body Bebê 3 Peças Flamingo Branco - Club B</td>
              <td>R$26,90</td>
              <td>
                <div>
                  <Trash size={35} />
                  <input type="text" disabled value="1" />
                  <div>
                    <KeyboardArrowUp size={25} />
                    <KeyboardArrowDown size={25} />
                  </div>
                </div>
              </td>
              <td>R$26,90</td>
            </tr>
          </tbody>
        </S.ProductTable>

        <S.CartFooter>
          <div className="coupon">
            <span>
              <MoneyOff size={15} /> Aplicar cupom
            </span>
            <div className="coupon-detail">
              <span>Informe aqui seu cupom promocional</span>
              <input type="text" />
              <button type="button">Aplicar cupom</button>
            </div>
          </div>

          <div className="totals">
            <hr />
            <span className="subtotal">
              Subtotal <span>R$26,90</span>{' '}
            </span>
            <hr />
            <span className="grand-total">
              Total Geral <strong>R$26,90</strong>
            </span>
          </div>
        </S.CartFooter>
      </S.CartBody>
      <S.PageFooter>
        <button className="continue-buy" type="button">
          <Icon size={15} />
          Continuar comprando
        </button>
        <button className="finish-buy" type="button">
          Finalizar Compra
        </button>
      </S.PageFooter>
    </S.Container>
  );
}
