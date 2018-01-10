import React from 'react';
import { View,Text,Button } from 'react-native';

export default class VisitListElement extends React.Component {
    constructor(props) {
        super(props);
        this.visitaClick = this.visitaClick.bind(this);
    }
    visitaClick() {
        this.props.visitaClickApp(this.props.visita);

    }
    render() {
        let visita = this.props.visita;
        let vendedor = visita.Salesman;
        let cliente = visita.Customer;
        let fecha = visita.plannedFor;
        let nombreVendedor = vendedor.fullname;
        let nombreCliente = cliente.name;
        return (
                <View>
                    <Text>{fecha}</Text>
                    <Text>{nombreCliente}</Text>
                    <Text>{nombreVendedor}</Text>
                    <Button title="Detalles" onPress={()=>{this.visitaClick()}}/>


                </View>
        );

    }
}
