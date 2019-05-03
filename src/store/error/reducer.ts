import { MOSTRAR_ERROR, VALIDAR_FORMULARIO, TErrorActionsTypes } from "./types";

const initialState = {
  error: false
};

export default function errorReducer(
  state = initialState,
  action: TErrorActionsTypes
) {
  switch (action.type) {
    case VALIDAR_FORMULARIO:
      return {
        error: action.payload
      };
    case MOSTRAR_ERROR:
      return {
        error: action.payload
      };
    default:
      return state;
  }
}
