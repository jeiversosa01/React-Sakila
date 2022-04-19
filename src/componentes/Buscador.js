import React from 'react';

class Buscador extends React.Component {    

    // Método react para guardar los valores del input en una variable
    busquedaRef = React.createRef();

    // Al presionar submit toma los valores del input y los envía al App.js
    obtenerDatos = (e) => {

        e.preventDefault();

        // Toma el valor del input
        const numero = this.busquedaRef.current.value;

        // Lo enviámos al componente principal App.js
        if (numero === '') {return null}
        this.props.datosBusqueda(numero); 
    }

    // Formulario de busqueda
    render() {        
        return( 
            <form onSubmit = {this.obtenerDatos}> 
                <div className="row">                                                
                    <div className="form-group col-md-9">
                        <input ref = {this.busquedaRef} type="number" min="1" max="200" className="form-control 
                        form-control-lg" placeholder="ID del Actor" />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="submit" className="btn btn-lg btn-success btn-block" 
                        value="Buscar" />
                    </div>                
                </div>
            </form>
        ); 
    }
}

export default Buscador;