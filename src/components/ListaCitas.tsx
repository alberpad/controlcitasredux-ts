import React, { Component } from 'react';
import { ICita } from './AgregarCitaCompleto';
import Cita from './Cita';

interface IListaCitasProps {
  citas: ICita[];
  eliminarCita: (id: string) => void;
}

class ListaCitas extends Component<IListaCitasProps> {
  render() {
    const citas = this.props.citas;
    const eliminarCita = this.props.eliminarCita;
    console.log(Object.keys(citas));
    const numCitas = Object.keys(citas).length;
    const mensaje: string =
      numCitas === 0 ? 'No hay citas' : 'Administra tus citas aquí';
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-tigle text-center">{mensaje}</h2>
          <div className="lista-citas">
            {Object.keys(citas).map((cita) => (
              <Cita
                key={cita}
                info={this.props.citas[parseInt(cita)]}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListaCitas;
