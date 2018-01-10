import React from 'react';
import { View,Text } from 'react-native';
export default class CustomerDetail extends React.Component {
    render() {
        let customer = this.props.customerDetail;
        let customerName = customer.name;
        let customerAdress = customer.address1;
        let customerCity = customer.city;
        let customerPhone = customer.phone1;
        return (
            <View id = 'customer'>

                <Text> Nombre cliente: {customerName}</Text>
                <Text />
                <Text> Dirección cliente: {customerAdress}</Text>
                <Text />
                <Text> Ciudad Cliente: {customerCity}</Text>
                <Text />
                <Text> Teléfono Cliente: {customerPhone}</Text>
                <Text />

            </View>
        );
    }
}
