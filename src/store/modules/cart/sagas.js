import { put, call, select, all, takeLatest } from 'redux-saga/effects';
import {
  addToCartSuccess,
  updateAmountSuccess,
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

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
