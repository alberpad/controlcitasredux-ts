import React, { Component } from "react";
import { connect } from "react-redux";

import { ICita } from "../store/citas/types";
import { eliminarCita } from "../store/citas/actions";
import { IState } from "../store";

interface ICitaProps {
  info: ICita;
  eliminarCita: (id: string) => void;
  // key: string;
}

class Cita extends Component<ICitaProps> {
  handleEliminar = () => {
    console.log(this.props.info.id);
    this.props.eliminarCita(this.props.info.id);
  };
  render() {
    const { mascota, propietario, fecha, hora, sintomas } = this.props.info;
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
            <button className="btn btn-danger" onClick={this.handleEliminar}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { eliminarCita }
)(Cita);
