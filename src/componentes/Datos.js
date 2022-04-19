import React from "react";
import NombreApellido from "./NombreApellido";

class Datos extends React.Component {

    mostrarActor = () => {

        const actor = this.props.actor;
        
        if (actor.length === 0) return null;

        return(
            <table className="table table-hover">
                <thead>
                    <tr className="table-danger">
                        <th scope="col">NOMBRE</th>
                        <th scope="col">APELLIDO</th>
                    </tr>
                </thead>
                <tbody>  
                    {actor.map(actor => (
                        <NombreApellido
                            key = {actor.actorId}                            
                            actor = {actor}
                        />
                    ))}
                </tbody>
            </table>
        );
    }

    render () {
        return (            
            <React.Fragment>
                { this.mostrarActor() }
            </React.Fragment>
        );
    }
}

export default Datos;