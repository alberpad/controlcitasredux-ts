import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import AgregarCita from "./components/AgregarCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header titulo="Administrador Pacientes Veterinaria" />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita />
            </div>
            <div className="col-md-6">
              <ListaCitas />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
