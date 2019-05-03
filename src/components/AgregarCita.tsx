import React, { createRef, Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";

import { ICita, ICitasState } from "../store/citas/types";
import { agregarCita } from "../store/citas/actions";
import { mostrarError } from "../store/error/actions";
import { IState } from "../store";

interface IAgregarCitaProps {
  agregarCita: (a: ICita) => void;
  mostrarError: (estado: boolean) => void;
  error: boolean;
}
interface IAgregarCitaState {}
class AgregarCita extends Component<IAgregarCitaProps, IAgregarCitaState> {
  state = {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  };

  componentWillMount() {
    this.props.mostrarError(false);
  }

  private handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { mascota, propietario, fecha, hora, sintomas } = this.state;

    if (!mascota || !propietario || !fecha || !hora || !sintomas) {
      this.props.mostrarError(true);
    } else {
      this.props.mostrarError(false);
      const nuevaCita: ICita = {
        id: uuid(),
        mascota,
        propietario,
        fecha,
        hora,
        sintomas
      };
      this.props.agregarCita(nuevaCita);

      e.currentTarget.reset();
    }
  };

  render() {
    const existeError: boolean = this.props.error;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las Citas Aquí</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  name="mascota"
                  onChange={this.handleOnChange}
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  name="propietario"
                  onChange={this.handleOnChange}
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de la Mascota"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input
                  name="fecha"
                  onChange={this.handleOnChange}
                  type="date"
                  className="form-control"
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  name="hora"
                  onChange={this.handleOnChange}
                  type="time"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  name="sintomas"
                  onChange={this.handleOnChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-100">
                  Agregar
                </button>
              </div>
            </div>
          </form>
          {existeError && (
            <div className="alert alert-danger text-center">
              Todos los campos son obligatorios
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  citas: state.stateCitas.citas,
  error: state.stateError.error
});

export default connect(
  mapStateToProps,
  { agregarCita, mostrarError }
)(AgregarCita);
