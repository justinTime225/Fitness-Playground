import { combineReducers } from 'redux';
import basicWorkout from './basicWorkouts.reducer.js';
import customWorkout from './customWorkouts.reducer.js';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  basicWorkout: basicWorkout,
  customWorkout: customWorkout,
  form: formReducer
});

export default rootReducer;
