import React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./TargetDetail";
import CustomerDetail from "./CustomerDetail";
import Salesman from "./SalesmanDetails";
import { StyleSheet, View,Text } from 'react-native';

export default class Detail extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Detalles Visita`,
    });
    render() {
        
        let visitaSeleccionada = this.props.navigation.state.params.visit;

        let targetDetail = visitaSeleccionada.Targets;
        let customerDetail = visitaSeleccionada.Customer;
        let salesmanDetail = visitaSeleccionada.Salesman;
        return (
            <View style={styles.cabecera}>
                <View style={styles.fechas}><VisitDetail visita = {visitaSeleccionada}/></View>
                <Text style={styles.texto}>Target</Text>
                <View style={styles.target}><TargetDetail targetDetail = {targetDetail}/></View>
                <Text></Text>
                <Text style={styles.texto}>Cliente</Text>
                <View style={styles.cliente}><CustomerDetail customerDetail = {customerDetail}/></View>
                <Text style={styles.texto}>Vendedor</Text>
                <View style={styles.vendedor}><Salesman salesmanDetail ={salesmanDetail}/></View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    cabecera: {
        flex: 1,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    fechas: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'flex-start'
    },
    target: {
        flex: 3,
    },
    cliente: {
        flex: 3,
    },
    vendedor: {
        flex: 5,
    },

});