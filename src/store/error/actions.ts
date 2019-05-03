import { VALIDAR_FORMULARIO, MOSTRAR_ERROR, TErrorActionsTypes } from "./types";

export const validarFormulario = (estado: boolean): TErrorActionsTypes => {
  return {
    type: VALIDAR_FORMULARIO,
    payload: estado
  };
};

export const mostrarError = (estado: boolean): TErrorActionsTypes => {
  return {
    type: MOSTRAR_ERROR,
    payload: estado
  };
};
