import React, { Component } from 'react';
import { View, Text, StatusBar, Button, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Styles from '../style/Estilo';

export default class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = { item: '', pessoa: '', dataEmp: '', dataDev: '', diaDev: '', list: [] };
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
            item: this.state.item.slice(),
            pessoa: this.state.pessoa.slice(),
            dataEmp: this.state.dataEmp.slice(),
            dataDev: this.state.dataDev.slice(),
            diaDev: ''
        };

        const list = [...this.state.list];

        list.push(obj);

        this.setState({ list, item: '', pessoa: '', dataEmp: '', dataDev: '' });
    }

    checaEmprestimo(data) {
        const dataDev = new Date(data.split('/').reverse().join('/'));
        const hoje = new Date();
        let bgColor = '#66F54C';

        if (dataDev < hoje) {
            bgColor = '#F55252';
        }

        return bgColor;
    }

    /* deleteItem(id) {
        const list = [...this.state.list];
        const updateList = list.filter(item => item.id !== id);
        
        this.setState({ list: updateList });
    } */

    render() {
        return (
            <View style={Styles.viewPrincipal} >
                <StatusBar backgroundColor="#29487D" />
                <View style={Styles.viewForm} >
                    <View style={Styles.viewCampos} >
                        <TextInput
                            placeholder="Item Emprestado" 
                            value={this.state.item}
                            onChangeText={item => this.updateInput('item', item)}
                        />
                        <TextInput
                            placeholder="Emprestado Para" 
                            value={this.state.pessoa}
                            onChangeText={pessoa => this.updateInput('pessoa', pessoa)}
                        />
                    </View>
                    <View style={Styles.viewCampos} >
                        <TextInputMask
                            type={'datetime'}
                            options={{ format: 'DD/MM/YYYY' }}
                            placeholder="Data Emprestimo" 
                            value={this.state.dataEmp}
                            onChangeText={dataEmp => this.updateInput('dataEmp', dataEmp)}
                        />
                        <TextInputMask
                            type={'datetime'}
                            options={{ format: 'DD/MM/YYYY' }}
                            placeholder="Data Devolução" 
                            value={this.state.dataDev}
                            onChangeText={dataDev => this.updateInput('dataDev', dataDev)}
                        />
                    </View>
                    <View style={Styles.btnCadastrar} >
                        <Button 
                            title="Cadastrar"
                            onPress={() => this.addItem()}
                            color="#29487D"
                        />
                    </View>
                </View>
                <View style={Styles.viewList} >
                    <View 
                        style={Styles.viewCabecalhoList} 
                        backgroundColor="#CCC"
                    >
                        <View style={Styles.listItens} >
                                <Text>Item</Text>
                        </View>
                        <View style={Styles.listItens} >
                                <Text>Pessoa</Text>
                        </View>
                        <View style={Styles.listItens} >
                            <Text>Data Emp.</Text>
                        </View>
                        <View style={Styles.listItens} >
                            <Text>Data Dev.</Text>
                        </View>
                    </View>
                    {this.state.list.map(obj => (
                        <View 
                            style={Styles.viewCamposList} 
                            backgroundColor={this.checaEmprestimo(obj.dataDev)}
                        >
                            <View style={Styles.listItens} >
                                    <Text>{obj.item}</Text>
                            </View>
                            <View style={Styles.listItens} >
                                    <Text>{obj.pessoa}</Text>
                            </View>
                            <View style={Styles.listItens} >
                                <Text>{obj.dataEmp}</Text>
                            </View>
                            <View style={Styles.listItens} >
                                <Text>{obj.dataDev}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}
