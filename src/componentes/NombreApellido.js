import React from "react";

const NombreApellido = (props) => {

    const {firstName, lastName} = props.actor;

    return (
        <tr className="table-active">
            <td>{firstName}</td>
            <td>{lastName}</td>
        </tr>
    );
}

export default NombreApellido;