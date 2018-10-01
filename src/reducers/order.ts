import { Reducer } from 'redux';
import { Order } from 'src/types';

const initState = {
  id: ''
}

export const order: Reducer<Order> = (
  state = initState as Order,
  { type, payload }
) => {
  switch (type) {
    case 'ORDER_SELECTION':
      return {...state, ...payload};
    default:
      return state;
  }
};
