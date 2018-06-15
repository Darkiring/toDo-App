import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import Tareas from './renderComponent/Tareas';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
          <View style={styles.container}>
            {this.props.cargando &&
            <ActivityIndicator
              size="large"
              color="#640064"
            />
            }
            <FlatList
              data={this.props.arrayTareas}
              renderItem={({ item }) => <Tareas item={item} eliminar={this.props.eliminar} />}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#289758',
    },
    indicator: {
        alignItems: 'center',
    },
});
