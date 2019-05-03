import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// STATE
import { ICitasState } from './citas/types';
export interface IState {
  stateCitas: ICitasState;
}
const initialState = {};

// REDUCERS
import citasReducer from './citas/reducer';
const reducers = combineReducers({
  stateCitas: citasReducer
});

// MIDDLEWARES
const middleware = [thunk];

// STORE
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
