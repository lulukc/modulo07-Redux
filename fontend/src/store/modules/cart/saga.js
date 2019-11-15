import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updadeAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;
  const correntAmount = productExists ? productExists.amount : 0;

  const amount = correntAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updadeAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }
  yield put(updadeAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/Add_Request', addToCart),
  takeLatest('@cart/Update_amount_Request', updateAmount),
]);
