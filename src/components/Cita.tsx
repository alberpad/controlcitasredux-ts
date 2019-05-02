import React, { Component } from 'react';
import { ICita } from './AgregarCitaCompleto';

interface ICitaProps {
  info: ICita;
  eliminarCita: (id: string) => void;
  // key: string;
}

class Cita extends Component<ICitaProps> {
  _eliminarCita = () => {
    this.props.eliminarCita(this.props.info.id);
  };
  render() {
    const { id, mascota, propietario, fecha, hora, sintomas } = this.props.info;
    return (
      <div>
        <div className="media mt-3">
          <div className="media-body">
            <h3 className="mt-0">{mascota}</h3>
            <p className="card-text">
              <span>Propietario:</span>
              {propietario}
            </p>
            <p className="card-text">
              <span>Fecha:</span>
              {fecha}
            </p>
            <p className="card-text">
              <span>Hora:</span>
              {hora}
            </p>
            <p className="card-text">
              <span>Síntomas:</span>
            </p>
            <p className="card-text">{sintomas}</p>
            <button className="btn btn-danger" onClick={this._eliminarCita}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cita;
