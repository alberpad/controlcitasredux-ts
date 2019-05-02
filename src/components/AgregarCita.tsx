import React, { createRef, useRef, Component } from 'react';
import uuid from 'uuid';

export interface ICita {
  id: string;
  mascota: string;
  propietario: string;
  fecha: string;
  hora: string;
  sintomas: string;
}
interface IAgregarCitaProps {
  crearCita: (a: ICita) => void;
}
interface IAgregarCitaState {}
class AgregarCita extends Component<IAgregarCitaProps, IAgregarCitaState> {
  state = {
    error: false
  };

  // nombreMascotaRef = useRef<HTMLSelectElement>(null);
  nombreMascotaRef = createRef<HTMLInputElement>();
  propieatrioRef = createRef<HTMLInputElement>();
  fechaRef = createRef<HTMLInputElement>();
  horaRef = createRef<HTMLInputElement>();
  sintomasRef = createRef<HTMLTextAreaElement>();

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let mascota, propietario, fecha, hora, sintomas: string;
    this.nombreMascotaRef.current
      ? (mascota = this.nombreMascotaRef.current.value)
      : (mascota = '');
    this.propieatrioRef.current
      ? (propietario = this.propieatrioRef.current.value)
      : (propietario = '');
    this.fechaRef.current
      ? (fecha = this.fechaRef.current.value)
      : (fecha = '');
    this.horaRef.current ? (hora = this.horaRef.current.value) : (hora = '');
    this.sintomasRef.current
      ? (sintomas = this.sintomasRef.current.value)
      : (sintomas = '');

    if (!mascota || !propietario || !fecha || !hora || !sintomas) {
      console.log('faltan campos');
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      const nuevaCita: ICita = {
        id: uuid(),
        mascota,
        propietario,
        fecha,
        hora,
        sintomas
      };
      this.props.crearCita(nuevaCita);
      e.currentTarget.reset();
    }
  };

  render() {
    const existeError: boolean = this.state.error;
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
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  ref={this.nombreMascotaRef}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  ref={this.propieatrioRef}
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
                  ref={this.fechaRef}
                  type="date"
                  className="form-control"
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  ref={this.horaRef}
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
                <textarea ref={this.sintomasRef} className="form-control" />
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

export default AgregarCita;
