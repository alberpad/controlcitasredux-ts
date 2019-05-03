export const MOSTRAR_CITAS = "MOSTRAR_CITAS";
export const MOSTRAR_CITA = "MOSTRAR_CITA";
export const ELIMINAR_CITA = "ELIMINAR_CITA";
export const AGREGAR_CITA = "AGREGAR_CITA";
export const EDITAR_CITA = "EDITAR_CITA";

export interface ICita {
  id: string;
  mascota: string;
  propietario: string;
  fecha: string;
  hora: string;
  sintomas: string;
}

export interface ICitasState {
  citas: ICita[];
}

interface IActionMostarCitas {
  type: typeof MOSTRAR_CITAS;
  // payload: ICita[];
}

interface IActionMostrarCita {
  type: typeof MOSTRAR_CITA;
  payload: ICita;
}

interface IActionEliminarCita {
  type: typeof ELIMINAR_CITA;
  payload: string; //id del cita
}

interface IActionAgregarCita {
  type: typeof AGREGAR_CITA;
  payload: ICita;
}

interface IActionEditarCita {
  type: typeof EDITAR_CITA;
  payload: ICita;
}

export type TCitasActionsTypes =
  | IActionMostarCitas
  | IActionEliminarCita
  | IActionAgregarCita
  | IActionMostrarCita
  | IActionEditarCita;
