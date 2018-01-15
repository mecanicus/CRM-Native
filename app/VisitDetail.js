import React from 'react';
import { View,Text } from 'react-native';

export default class VisitDetail extends React.Component {

    render() {
        let visita = this.props.visita;
        let fechaPlanned = visita.plannedFor;
        let fechaFulfilled = visita.fulfilledAt;
        let fechaTerminadaArreglada = "";
        if(fechaFulfilled === null) {
            fechaTerminadaArreglada = "No hay fecha";
        }
        else{
            fechaTerminadaArreglada = fechaFulfilled.slice(0, 10);
        }
        let fechaPlaneadaArreglada = fechaPlanned.slice(0, 10);
        
        return (
            <View>
                    <Text>Fecha Planeada: {fechaPlaneadaArreglada}</Text>
                    <Text>Fecha Completada: {fechaTerminadaArreglada}</Text>
            </View>
        );

    }
}
