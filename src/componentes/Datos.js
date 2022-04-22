import React from "react";
import Nombre from "./Nombre";

class Datos extends React.Component {

    mostrarActor = () => {

        const actor = this.props.actor;
        
        if (actor.length === 0) return null;

        return(
            <React.Fragment>
                {actor.map(actor => (
                    <Nombre
                        key = {actor.actorId}                            
                        actor = {actor}
                    />
                ))}
            </React.Fragment>
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