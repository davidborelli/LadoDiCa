import produce from 'immer';

const INITIAL_STATE = {
  items: [],
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
    default:
      return state;
  }
}
