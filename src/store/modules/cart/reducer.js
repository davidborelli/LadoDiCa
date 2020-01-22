import produce from 'immer';

const INITIAL_STATE = {
  items: [],
  coupon: null,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.items = [...draft.items, action.payload.product];
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        draft.items = draft.items.filter(
          product => product.id !== action.payload.id
        );
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const idx = draft.items.findIndex(
          product => product.id === action.payload.id
        );

        if (idx >= 0) {
          draft.items[idx].amount = Number(action.payload.amount);
        }
      });

    case '@cart/ADD_CUPON_DISCOUNT_CART_SUCCESS':
      return produce(state, draft => {
        draft.coupon = action.payload;
      });
    default:
      return state;
  }
}
