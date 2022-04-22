import React from 'react';
import Buscador from './componentes/Buscador';
import Datos from './componentes/Datos';
import Tabla from './componentes/Tabla';

class App extends React.Component {

  state = {
    id : '',
    actor : '',
    peliculas : [],       
  }

  consultarApiActor = () => {

    const id = this.state.id;    
    const url = `http://localhost:7070/actor/listar/${id}`    

    // Retorna el link en Json
    fetch(url)

    .then(respuesta => respuesta.json())
    // .then(resultado => console.log(resultado))
    .then(resultado => this.setState({ actor : resultado })) // Envía el Json a la variable actor
  }

  consultarApiPeliculas = () => {

    const id = this.state.id;     
    const url = `http://localhost:7070/film/listar/actor/${id}`;
    
    // Retorna el link en Json
    fetch(url)

    .then(respuesta => respuesta.json())
    // .then(resultado => console.log(resultado))    
    .then(resultado => this.setState({ peliculas : resultado })) // Envía el Json a la variable peliculas
  }

  datosBusqueda = (id) => {    
    this.setState({
      id : id,      
    }, () => {
      this.consultarApiActor();
      this.consultarApiPeliculas();      
    })
  }

  render() {
    return(
      <div className="app container">
        <div className="jumbotron">
          <h1 className="display-5  text-center"><strong><p className="text-info">Busqueda de Películas por ID Actor</p></strong></h1>
          <Buscador
            datosBusqueda = {this.datosBusqueda}          
          />
        </div>
        <Datos 
          actor = {this.state.actor}
        />     
        <Tabla
          peliculas = {this.state.peliculas}          
        />
      </div>
    );
  }
}

export default App;