export const VALIDAR_FORMULARIO = "VALIDAR_FORMULARIO";
export const MOSTRAR_ERROR = "MOSTRAR_ERROR";

export interface IErrorState {
  error: boolean;
}

interface IActionValidarFormulario {
  type: typeof VALIDAR_FORMULARIO;
  payload: boolean;
}
interface IActionMostrarError {
  type: typeof MOSTRAR_ERROR;
  payload: boolean;
}

export type TErrorActionsTypes = IActionValidarFormulario | IActionMostrarError;
