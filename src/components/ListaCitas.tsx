import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ICita } from '../store/citas/types';
import { mostrarCitas } from '../store/citas/actions';
import Cita from './Cita';
import { IState } from '../store';

interface IListaCitasProps {
  citas: ICita[];
  eliminarCita: (id: string) => void;
  mostrarCitas: () => void;
}

class ListaCitas extends Component<IListaCitasProps> {
  componentDidMount() {
    this.props.mostrarCitas();
  }

  render() {
    const citas = this.props.citas;
    const eliminarCita = this.props.eliminarCita;
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

const mapStateToProps = (state: IState) => ({
  citas: state.stateCitas.citas
});

export default connect(
  mapStateToProps,
  { mostrarCitas }
)(ListaCitas);
