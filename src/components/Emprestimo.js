import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Styles from '../style/Estilo';

export default class Emprestimo extends Component {

    constructor(props) {
        super(props);
        //this.state = { newItem: '', list: [] };
        this.state = { item: '', dataDev: '', list: [] };
    }

    updateInput(key, value) {
        this.setState({ [key]: value });
    }

    addItem() {
        /* const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({ list, newItem: '' }); */

        const obj = {
            id: 1 + Math.random(),
            item: this.state.item.slice(),
            dataDev: this.state.dataDev.slice()
        };

        const list = [...this.state.list];

        list.push(obj);

        this.setState({ list, item: '', dataDev: '' });
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
                   value={this.state.item}
                   onChangeText={item => this.updateInput('item', item)}
                />
                <TextInput
                   placeholder="Data Devolução" 
                   value={this.state.dataDev}
                   onChangeText={data => this.updateInput('dataDev', data)}
                />
                <View style={Styles.btnCadastrar} >
                    <Button 
                        title="Cadastrar"
                        onPress={() => this.addItem()}
                        color="#29487D"
                    />
                </View>
                <View>
                   {this.state.list.map(obj => (
                       <View>
                           <Text>
                                {obj.item}
                            </Text>
                            <Text>
                                {obj.dataDev}
                            </Text>
                        </View>
                   ))}            
                </View>
            </View>
        );
    }
}
