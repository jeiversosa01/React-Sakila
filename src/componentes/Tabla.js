import React from 'react';
import Pelicula from './Pelicula';

class Tabla extends React.Component {    

    mostrarPeliculas = () => {    

        const peliculas = this.props.peliculas;
        
        if (peliculas.length === 0) return null;

        return (                        
            <table className="table table-hover">                
                <thead className="table-success text-center">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">TITULO</th>
                    <th scope="col">DESCRIPTION</th>                    
                    </tr>
                </thead>                
                <tbody>  
                    {peliculas.map(pelicula => (                        
                        <Pelicula                            
                            key = {pelicula.filmId}
                            pelicula = {pelicula}                                                       
                        />
                    ))}
                </tbody>
            </table>            
        );
    }

    render() {
        return(
            <React.Fragment>
                { this.mostrarPeliculas() }
            </React.Fragment>
        );
    }
}

export default Tabla;