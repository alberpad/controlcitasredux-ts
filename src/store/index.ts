import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// STATE
import { ICitasState } from "./citas/types";
import { IErrorState } from "./error/types";
export interface IState {
  stateCitas: ICitasState;
  stateError: IErrorState;
}
const initialState = {};

// REDUCERS
import citasReducer from "./citas/reducer";
import errorReducer from "./error/reducer";
const reducers = combineReducers({
  stateCitas: citasReducer,
  stateError: errorReducer
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
