import { CUSTOM_WORKOUT } from '../actions/form.action.js';

const defaultState = {list: [], item: null};
export default function(state = defaultState, action) {
  if (action.type === CUSTOM_WORKOUT) {
    console.log('inside custom workout', action.payload.data);
    return {list: [...action.payload.data], item: null};
  }
  return state;
}
