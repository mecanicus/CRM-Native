import React from 'react';
import { View,Text,Button, AsyncStorage } from 'react-native';

export default class VisitListElement extends React.Component {


    constructor(props) {
        super(props);
        this.visitaClick = this.visitaClick.bind(this);
        this._guardarVisita = this._guardarVisita.bind(this);
        this._borrarVisita = this._borrarVisita.bind(this);
        this._ponerBienBotones = this._ponerBienBotones.bind(this);
        
        this.state = {
            activarSave : false,
            activarRemove : true,
        };

    }
    visitaClick() {
        this.props.visitaClickApp(this.props.visita);

    }
    componentDidMount(){  
    this._ponerBienBotones();

    }
    async _ponerBienBotones(){
        try {
            const objeto = await AsyncStorage.getItem('@P7_2017_IWEB:visits');

                let value = JSON.parse(objeto);
                for(let i = 0 ; i<value.length; i++){
                    if(value[i].id === this.props.visita.id){
                        this.setState({
                            activarSave : true,
                            activarRemove : false,
                        })
                    }
                }

            
            
        }
        catch (error) {"Error saving data"}
    }
    async _guardarVisita(){
        try {
            const objeto = await AsyncStorage.getItem('@P7_2017_IWEB:visits');
            if(objeto === null || objeto.length === 0){
                let arrayGuardado = [];
                arrayGuardado[0]=this.props.visita;
                await AsyncStorage.setItem('@P7_2017_IWEB:visits',JSON.stringify(arrayGuardado));
                            this.setState({
                activarSave : true,
                activarRemove : false,
            })
                console.log("Guardada, no hay anteriores");
                
            }
            else{
                const valueArray = await AsyncStorage.getItem('@P7_2017_IWEB:visits');
                let value = JSON.parse(valueArray);
                console.log(value);
                value[value.length]= this.props.visita;
                await AsyncStorage.setItem('@P7_2017_IWEB:visits',JSON.stringify(value));
                            this.setState({
                activarSave : true,
                activarRemove : false,
            })
                console.log("Guardada");
            }

        }
        catch (error) {}

    }
    async _borrarVisita(){
        let arrayVisitas=[];
        let x=0;
        try {
           const valueString = await AsyncStorage.getItem('@P7_2017_IWEB:visits');
           let value = JSON.parse(valueString);
            if (value !== null){
                for(let i = 0 ; i<value.length; i++){
                    if (this.props.visita.id === value[i].id){
                    }
                    else{
                        arrayVisitas[x]=value[i];
                        x++;
                    }
                }
                await AsyncStorage.setItem('@P7_2017_IWEB:visits', JSON.stringify(arrayVisitas));
                this.setState({
                    activarSave : false,
                    activarRemove : true,
                })
                console.log("Borrada");
            }
        } catch (error) { console.log("Error al borrar"); }
    }
    render() {
        const textStyle = {
            fontWeight: 'bold',
            padding: 2,
            marginLeft : 4,
            fontSize : 20,
        }
        let visita = this.props.visita;
        let vendedor = visita.Salesman;
        let cliente = visita.Customer;
        let fecha = visita.plannedFor;
        let nombreVendedor = vendedor.fullname;
        let nombreCliente = cliente.name;
        let fechaArreglada = fecha.slice(0, 10);
        return (
                <View style={{borderBottomWidth: 5}}>
                    <Text style={textStyle}>Fecha: {fechaArreglada}</Text>
                    <Text style={textStyle}>Cliente: {nombreCliente}</Text>
                    <Text style={textStyle}>Vendedor: {nombreVendedor}</Text>
                    <Button title="Detalles" onPress={()=>{this.visitaClick()}}/>
                    <Button title="Save visit" color="green" onPress={()=>{this._guardarVisita()}} disabled={this.state.activarSave}/>
                    <Button title="Remove visit" color="red" onPress={()=>{this._borrarVisita()}} disabled={this.state.activarRemove}/>


                </View>
        );

    }
}
