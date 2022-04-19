import React from "react";

const Pelicula = (props) => {

    const {filmId, title, description} = props.pelicula;

    return (
        <tr className="table-dark">
            <td>{filmId}</td>
            <td>{title}</td>
            <td>{description}</td>
        </tr>
    );
}

export default Pelicula;