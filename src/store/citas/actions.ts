import {
  TCitasActionsTypes,
  MOSTRAR_CITAS,
  ELIMINAR_CITA,
  ICita,
  AGREGAR_CITA
} from './types';
import { Dispatch } from 'redux';

export const mostrarCitas = () => async (dispatch: Dispatch) => {
  dispatch<TCitasActionsTypes>({
    type: MOSTRAR_CITAS
  });
};

// export const eliminarCitas = (id: number) => async (dispatch: Dispatch) => {
//   await axios.delete(`http://localhost:5000/productos/${id}`);
//   dispatch<TCitasActionsTypes>({
//     type: ELIMINAR_CITA,
//     payload: id
//   });
// };

// export const agregarCita = (cita: Partial<ICita>) => async (
//   dispatch: Dispatch
// ) => {
//   const response = await axios.post(
//     `http://localhost:5000/productos/`,
//     producto
//   );
//   dispatch<TCitasActionsTypes>({
//     type: AGREGAR_CITA,
//     payload: response.data
//   });
// };
