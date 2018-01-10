import React from 'react';
import VisitList from './VisitList';
import Detail from "./Detail";
import { visits } from "./../assets/mock-data.js";
import { View, Text, Modal, TouchableHighlight} from 'react-native';
export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            visitaSeleccionada: null,
            visits: visits,
            visible: false,
        };
        this.visitaClickApp = this.visitaClickApp.bind(this);
        this.editaParametros = this.editaParametros.bind(this);
        this.volver = this.volver.bind(this);
    }
    componentDidMount(){
        this.peticionWeb()
    }
    visitaClickApp(visita) {
        this.setState({
            visitaSeleccionada: visita,
            visible :true,
        });
    }
    peticionWeb(){

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                this.setState({
                    visits: JSON.parse(xhr.response)
                })

            }
            else {
                console.log("Error");
            }
            }.bind(this);
            xhr.open("GET", "https://dcrmt.herokuapp.com/api/visits/flattened?token=232a6ff08c235306c577", true);
            xhr.send();
            }

    editaParametros() {
        let URL = 'https://dcrmt.herokuapp.com/api/visits/flattened?token=232a6ff08c235306c577';
        let parametros = location.search;
        let parametrosEditados = parametros.replace("?", "&");
        return URL + parametrosEditados;
    }
    volver() {
        this.setState({
            visible : false,
        });
    }
    render() {
        return (
            <View>
                <VisitList visits = {this.state.visits} visitaClickApp = {this.visitaClickApp}/>

                <Modal animationType={"slide"} transparent={false} visible={this.state.visible}
                           onRequestClose={()=>{alert("Usuario ha tocado el boton")}}>
                    <View style={{padding:5, alignItems:'center', justifyContent:'center'}}>
                        <TouchableHighlight style={{alignSelf:'flex-end'}} onPress={() => {this.volver()}}>
                            <Text style={{fontSize:20, marginBottom: 20}}>Salir</Text>
                        </TouchableHighlight>
                            <Detail visitaSeleccionada={this.state.visitaSeleccionada}/>
                    </View>
                 </Modal>

            </View>
        );
    }
}

