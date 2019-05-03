import {
  TCitasActionsTypes,
  MOSTRAR_CITAS,
  ELIMINAR_CITA,
  ICita,
  AGREGAR_CITA
} from "./types";
import { Dispatch } from "redux";

export const mostrarCitas = (): TCitasActionsTypes => {
  return {
    type: MOSTRAR_CITAS
  };
};

export const eliminarCita = (id: string): TCitasActionsTypes => {
  return {
    type: ELIMINAR_CITA,
    payload: id
  };
};

export const agregarCita = (cita: ICita): TCitasActionsTypes => {
  return {
    type: AGREGAR_CITA,
    payload: cita
  };
};
