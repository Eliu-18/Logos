import React from "react";
import Teologo from "../Componentes/teologos"

export default class ListaTeologos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <>
                {this.props.teologos.map((teologo) => (
                    <Teologo nombre={teologo.nombre} img={teologo.img} descripcion={teologo.descripcion} />
                ))}
             </>
        );
    }
}