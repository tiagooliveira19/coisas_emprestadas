import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import Styles from '../style/Estilo';

export default class Emprestimo extends Component {

    /* https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2 */

    constructor(props) {
        super(props);
        this.state = { newItem: '', list: [] };
    }

    updateInput(key, value) {
        this.setState({ [key]: value });
    }

    addItem() {
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({ list, newItem: '' });
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updateList = list.filter(item => item.id !== id);
        this.setState({ list: updateList });
    }

    render() {
        return (
            <View style={Styles.viewPrincipal} >
                <TextInput 
                   placeholder="Item Emprestado" 
                   value={this.state.newItem}
                   onChange={e => this.updateInput('newItem', e.target.value)} 
                />
                <View style={Styles.btnCadastrar} >
                    <Button 
                        title="Cadastrar"
                        onPress={() => this.addItem()}
                        color="#29487D"
                    />
                </View>
                <View>
                   {this.state.list.map(item => {
                      return (
                          <View>{item.value}</View>
                      );
                   })}            
                </View>
            </View>
        );
    }
}
