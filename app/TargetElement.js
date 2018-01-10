import React from 'react';
import { View,Text } from 'react-native';

export default class TargetElement extends React.Component {
    render() {
        let target = this.props.target;
        let notes = target.notes;
        let company = target.Company;
        let companyName = company.name;
        let companyWeb = company.web1;
        if (companyWeb === null) {
            companyWeb = "No hay página web";
        }
        if (notes === "") {
            notes = "No hay notas";
        }
        return (
            <View>

                <Text> Compañía : {companyName}</Text>
                    
                <Text> Notes: {notes}</Text>
                    
                <Text> Web: {companyWeb}</Text>
                

            </View>
        );
    }
}
