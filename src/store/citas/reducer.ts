// CITAS REDUCERS

import {
  MOSTRAR_CITAS,
  ICitasState,
  TCitasActionsTypes,
  // EDITAR_CITA,
  // MOSTRAR_CITA,
  ELIMINAR_CITA,
  AGREGAR_CITA
} from './types';

const initialState: ICitasState = {
  citas: [
    {
      id: '0',
      fecha: '10-20-30',
      hora: '10:30',
      mascota: 'Perro',
      propietario: 'Juan',
      sintomas: 'no quiere comer'
    }
  ]
};

export default function citasReducer(
  state: ICitasState = initialState,
  action: TCitasActionsTypes
) {
  switch (action.type) {
    case MOSTRAR_CITAS:
      return {
        ...state
        // citas: action.payload
      };
    case ELIMINAR_CITA:
      return {
        ...state,
        citas: state.citas.filter((cita) => Number(cita.id) !== action.payload)
      };
    case AGREGAR_CITA:
      return {
        ...state,
        citas: [...state.citas, action.payload]
      };
    // case MOSTRAR_CITA:
    //   return {
    //     ...state,
    //     cita: action.payload
    //   };
    // case EDITAR_CITA:
    //   return {
    //     ...state,
    //     citas: state.citas.map(cita =>
    //       cita.id === action.payload.id
    //         ? (cita = action.payload)
    //         : cita
    //     )
    //   };
    default:
      return state;
  }
}
