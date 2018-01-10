import React from 'react';
import { View,Text, Image } from 'react-native';

export default class SalesmanDetails extends React.Component {
    render() {
        let salesman = this.props.salesmanDetail;
        let salesmanName = salesman.fullname;
        let salesmanEmail = salesman.email1;
        let salesmanNotes = salesman.notes;
        let photoUrl;

        if (salesman.Photo === null || salesman.Photo.url === ""){
            photoUrl = "https://www.shareicon.net/data/128x128/2016/01/23/707803_store_512x512.png"
        }
        else {
            photoUrl = String(salesman.Photo.url)
        }
        return (
            <View id = 'salesman'>

                <Text> Nombre vendedor: {salesmanName}</Text>
                <Text />
                <Text> Email vendedor: {salesmanEmail}</Text>
                <Text />
                <Text> Notas vendedor: {salesmanNotes}</Text>
                <Text />
                <Image style={{width: 100, height: 100, borderRadius: 100}} source={{uri: photoUrl}} />

            </View>
        );
    }
}
