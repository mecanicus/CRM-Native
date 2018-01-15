import React from 'react';
import VisitList from './VisitList';
import Detail from "./Detail";
import { AsyncStorage, StatusBar, View, Text, Modal, TouchableHighlight, Button} from 'react-native';
export default class Main extends React.Component {
    static navigationOptions = {
        title: 'Visitas'
    };

    constructor(props) {
        super(props);
        this.state = {
            visits: null,
        };
        this.visitaClickApp = this.visitaClickApp.bind(this);
        this.peticionWeb = this.peticionWeb.bind(this);
        this._descargadas = this._descargadas.bind(this);
        this._borrarDescargadas = this._borrarDescargadas.bind(this);
    }
    componentDidMount(){
        this.peticionWeb()
        StatusBar.setHidden(true);
    }
    visitaClickApp(visita) {
        this.props.navigation.navigate('Detail', {visit: visita});
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
            }
            }.bind(this);
            xhr.open("GET", "https://dcrmt.herokuapp.com/api/visits/flattened?token=232a6ff08c235306c577", true);
            xhr.send();
    }
    async _borrarDescargadas(){
        try {
            await AsyncStorage.removeItem('@P7_2017_IWEB:visits');
            this.setState({
                    visits: ""
            })
            //peticionWeb();
        } catch (error) {}

    }
    async _descargadas(){
        try {
            const visitas = await AsyncStorage.getItem('@P7_2017_IWEB:visits');
            console.log("1");
            let visitaas=JSON.parse(visitas);
            if(visitaas===null){
            this.setState({
                    visits: ""
            })
            //peticionWeb();
            return;
            }

                this.setState({
                    visits: JSON.parse(visitas)
                })
                console.log(this.state.visits);

            
        }
        catch (error) {"Error saving data"}

}

    render() {

        const viewStyle = {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
        const textStyle = {
            fontWeight: 'bold',
            fontSize: 28,
        }
        if(this.state.visits === null){
            return (
                <View style={viewStyle}>
                <Text style={textStyle}>Cargando Visitas</Text>
                </View>
            );
        }
        if(this.state.visits === ""){
            return (
                <View>
                <Button title="CRM" color="black" onPress={()=>{this.peticionWeb()}}/>
                {/*<Button title="Descargadas"  color="black" onPress={()=>{this._descargadas()}}/>
                <Button title="Borrar descargadas"  color="black" onPress={()=>{this._borrarDescargadas()}}/>*/}
                    <Text style={textStyle}>No hay visitas almacenadas</Text>
                </View>
            );
        }
        return (
            <View>
                <Button title="CRM" color="black" onPress={()=>{this.peticionWeb()}}/>
                <Button title="Descargadas"  color="black" onPress={()=>{this._descargadas()}}/>{/**/}
                <Button title="Borrar descargadas"  color="black" onPress={()=>{this._borrarDescargadas()}}/>
                <VisitList visits = {this.state.visits} visitaClickApp = {this.visitaClickApp}/>

            </View>
        );
    }
}

