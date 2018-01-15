import React from 'react';
import TargetElement from "./TargetElement";
import { View,Text, FlatList } from 'react-native';

export default class TargetDetail extends React.Component {
    render() {
        let targets = this.props.targetDetail;
        
       return(
                <View >
                    <FlatList
                        style={{}}
                        data={targets}
                        renderItem={
                            ({item}) =>
                            <TargetElement target={item}></TargetElement>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            );
    }
}
