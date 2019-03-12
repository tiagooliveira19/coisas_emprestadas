import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Inicio from './components/Inicio';
import Emprestimo from './components/Emprestimo';

export default () => (
    <Router navigationBarStyle={{ backgroundColor: '#2D5292' }} titleStyle={{ color: '#FFF' }} >
        <Scene key="root" >
            <Scene 
                key="inicio"
                component={Inicio}
                title="Inicio"
                hideNavBar
            />
            <Scene 
                key="emprestimo"
                component={Emprestimo}
                title="Emprestimos"
                hideNavBar={false}
            />
        </Scene>
    </Router>
);
