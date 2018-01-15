import React from 'react';
import VisitListElement from './VisitListElement';
import {AsyncStorage, StyleSheet,View,FlatList,Text, ListView } from 'react-native';
export default class VisitList extends React.Component {

   render() {

        return (
                <View>

                    <FlatList
                        style={{}}
                        data={this.props.visits}
                        renderItem={
                            ({item}) =>
                            <VisitListElement visita={item} visitaClickApp={this.props.visitaClickApp}></VisitListElement>
                        }
                        keyExtractor={item => item.id}
                    />
                    

                    </View>
        )

    }
}
