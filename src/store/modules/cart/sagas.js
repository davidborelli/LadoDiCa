import { put, call, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  addToCartSuccess,
  updateAmountSuccess,
  addCuponDiscountCartSuccess,
} from '~/store/modules/cart/actions';

import api from '~/services/api';

function* addToCart({ payload }) {
  const { id } = payload;

  const productExists = yield select(state =>
    state.cart.items.find(p => p.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products?id=${id}`);

    const data = {
      ...response.data[0],
      amount: 1,
    };

    yield put(addToCartSuccess(data));

    // history.push('/cart');
  }
}

function* updateAmount({ payload }) {
  const { id, amount } = payload;

  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

function* addCouponDiscount({ payload }) {
  const couponExists = yield select(state => state.cart.coupon);

  if (couponExists) {
    toast.error(`Já existe cupom ${couponExists.name} aplicado no carrinho`);
    return;
  }

  const response = yield call(api.get, `/cupons?name=${payload}`);

  if (response.data.length === 0) {
    toast.error(`Cupom ${payload} não existe`);
    return;
  }

  yield put(addCuponDiscountCartSuccess(response.data[0]));
  toast.success(
    `Cupom ${response.data[0].name} inserido com sucesso no carrinho...`
  );
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/ADD_CUPON_DISCOUNT_CART_REQUEST', addCouponDiscount),
]);
