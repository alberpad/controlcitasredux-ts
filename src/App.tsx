import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import { ICita } from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';

interface IState {
  citas: ICita[];
}

class App extends Component {
  state: IState = {
    citas: []
  };

  componentDidMount() {
    const citasLocalStorage = localStorage.getItem('citas');
    if (citasLocalStorage) {
      this.setState({
        citas: JSON.parse(citasLocalStorage)
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  private crearCita = (nuevaCita: ICita) => {
    const citas = [...this.state.citas, nuevaCita];
    this.setState({
      citas
    });
  };

  private eliminarCita = (id: string) => {
    console.log(id);
    //obtener copia del state
    const citasActuales = [...this.state.citas];
    //Eliminar de la copia del state la cita con el id referenciado
    const citasFiltered = citasActuales.filter((cita) => cita.id !== id);
    // acutualizar el state
    this.setState({
      citas: citasFiltered
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
