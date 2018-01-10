import React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./TargetDetail";
import CustomerDetail from "./CustomerDetail";
import Salesman from "./SalesmanDetails";
import { View,Text } from 'react-native';

export default class Detail extends React.Component {
    render() {
        
        let visitaSeleccionada = this.props.visitaSeleccionada

        let targetDetail = visitaSeleccionada.Targets;
        let customerDetail = visitaSeleccionada.Customer;
        let salesmanDetail = visitaSeleccionada.Salesman;
        return (
            <View id = 'detail'>
                <VisitDetail visita = {visitaSeleccionada}/>
                {/*<TargetDetail targetDetail = {targetDetail}/>*/}
                <CustomerDetail customerDetail = {customerDetail}/>
                <Salesman salesmanDetail ={salesmanDetail}/>
            </View>
        );
    }
}
