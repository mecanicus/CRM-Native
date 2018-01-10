import React from 'react';
import VisitList from './VisitList';
import Detail from "./Detail";

import $ from 'jquery';
export default class App extends React.Component {

    componentDidMount() {
        let url = this.editaParametros();
        this.peticionWeb(url);
    }
    constructor(props) {
        super(props);
        this.state = {
            indexVisitaSeleccionada: null,
            visits: null,
        };
        this.visitaClickApp = this.visitaClickApp.bind(this);
        this.editaParametros = this.editaParametros.bind(this);
        this.peticionWeb = this.peticionWeb.bind(this);
    }
    visitaClickApp(index) {
        this.setState({
            indexVisitaSeleccionada: index,
        });
    }

    editaParametros() {
        let URL = 'https://dcrmt.herokuapp.com/api/visits/flattened?token=232a6ff08c235306c577';
        let parametros = location.search;
        let parametrosEditados = parametros.replace("?", "&");
        return URL + parametrosEditados;
    }
    peticionWeb(url) {
        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    visits: data,
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(url, status, err.toString());
            },
        });
    }

    render() {
        return (
            <View>

                <Detail visits = {this.state.visits} indexVisita = {this.state.indexVisitaSeleccionada} />
                <VisitList visits = {this.state.visits} visitaClickApp = {this.visitaClickApp}/>

            </View>
        );
    }
}

