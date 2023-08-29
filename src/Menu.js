import React from "react";

export default class Menu extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12 d-flex align-items-center">
                    <h1> Arts </h1>
                    <span className="mx-3"> Inicio </span>
                    <span className="mx-3"> Artistas </span>
                    <span className="mx-3"> Contacto </span>
                </div>
            </div>
        );
    }
}