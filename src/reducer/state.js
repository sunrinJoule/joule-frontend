import { UPDATE } from '../action/state';

export default function stateReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE:
      // Overwrite everything
      return action.payload;
  }
  return state;
}
