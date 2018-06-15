import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Tareas extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.texto}>{this.props.item.texto}</Text>
            <TouchableOpacity onPress={() => { this.props.eliminar(this.props.item.key); }}>
              <Icon
                name="md-trash"
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    texto: {
        fontSize: 24,
    },
});
