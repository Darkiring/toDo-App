/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import Header from './src/Header';
import Body from './src/Body';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
      cargando: true,
    };
  }

  componentDidMount() {
    this.recuperarEnElTelefono();
  }

  establecerTexto = (value) => {
    this.setState({
      texto: value,
    });
  }

  agregarTarea = () => {
    const nuevasTareas = [...this.state.tareas, { texto: this.state.texto, key: Date.now() }];
    this.guardarEnElTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
      texto: '',
    });
  }

  eliminarTareas = (id) => {
    const newTareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.guardarEnElTelefono(newTareas);
    this.setState({
      tareas: newTareas,
    });
  }

  guardarEnElTelefono = (tareas) => {
    AsyncStorage.setItem('@AppCursoUdemy:tareas', JSON.stringify(tareas))
    .then((valor) => {

    })
    .catch((error) => {
      // console.log(error);
    });
  }

  recuperarEnElTelefono = () => {
    AsyncStorage.getItem('@AppCursoUdemy:tareas')
    .then((valor) => {
          this.setState({
            cargando: false,
          });
      if (valor !== null) {
        const nuevasTareas = JSON.parse(valor);
        setTimeout(() => {
          this.setState({
            tareas: nuevasTareas,
          });
        }, 2000);
      }
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        cargando: false,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
        />
        <Body
          arrayTareas={this.state.tareas}
          eliminar={this.eliminarTareas}
          cargando={this.state.cargando}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
