import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class Header extends Component {
  constructor() {
    super();
    this.state = { };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.cambiarTexto}
          placeholder="Aqui escribe tu texto..."
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#03FA6E',
    header
  },
  texto: {
      paddingHorizontal: 16,
      fontSize: 24,
  },
});

