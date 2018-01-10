import React from 'react';
import { View,Text } from 'react-native';

export default class VisitDetail extends React.Component {

    render() {
        let visita = this.props.visita;
        let fechaPlanned = visita.plannedFor;
        let fechaFulfilled = visita.fulfilledAt;
        if(fechaFulfilled === null) {
            fechaFulfilled = "No hay fecha";
        }
        return (
            <View>
                    <Text>Fecha Planeada: {fechaPlanned}</Text>
                    <Text>Fecha Completada: {fechaFulfilled}</Text>
            </View>
        );

    }
}
