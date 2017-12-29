import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export default function counter(state = 0, action) {
	let newState = state ;
  switch (action.type) {
    case INCREMENT_COUNTER:
      return newState + 1;
    case DECREMENT_COUNTER:
      return newState - 1;
    default:
      return state;
  }
}
