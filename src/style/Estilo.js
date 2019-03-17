import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    
    viewPrincipal: {
        flex: 1,
        padding: 10
    },

    viewForm: {
        flex: 1,
        margin: 10
    },

    viewCampos: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    btnCadastrar: {
        justifyContent: 'flex-end',
        margin: 50
    },

    viewList: {
        flex: 2,
        marginTop: 15
    },

    viewCabecalhoList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },

    viewCamposList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10
    },

    listItens: {
        margin: 10
    }
});

export default Styles;
