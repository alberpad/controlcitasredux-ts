import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import { ICita } from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  // componentDidMount() {
  //   const citasLocalStorage = localStorage.getItem('citas');
  //   if (citasLocalStorage) {
  //     this.setState({
  //       citas: JSON.parse(citasLocalStorage)
  //     });
  //   }
  // }
  // componentDidUpdate() {
  //   localStorage.setItem('citas', JSON.stringify(this.state.citas));
  // }

  // private crearCita = (nuevaCita: ICita) => {
  //   const citas = [...this.state.citas, nuevaCita];
  //   this.setState({
  //     citas
  //   });
  // };

  // private eliminarCita = (id: string) => {
  //   console.log(id);
  //   //obtener copia del state
  //   const citasActuales = [...this.state.citas];
  //   //Eliminar de la copia del state la cita con el id referenciado
  //   const citasFiltered = citasActuales.filter((cita) => cita.id !== id);
  //   // acutualizar el state
  //   this.setState({
  //     citas: citasFiltered
  //   });
  // };

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header titulo="Administrador Pacientes Veterinaria" />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita crearCita={() => {}} />
            </div>
            <div className="col-md-6">
              <ListaCitas eliminarCita={() => {}} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
