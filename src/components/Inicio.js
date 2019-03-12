import React, { Component } from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../style/Estilo';

export default class Inicio extends Component {
    render() {
        return (
            <View style={Styles.viewPrincipal} >
                <StatusBar backgroundColor="#29487D" />
                <View>
                    <Text>Lista Emprestimos</Text>
                </View>
                <View style={Styles.btnCadastrar} >
                    <Button 
                        title="Novo Empréstimo"
                        onPress={() => Actions.emprestimo()}
                        color="#29487D"
                    />
                </View>
            </View>
        );
    }
}
