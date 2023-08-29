import React from "react";
import ListaTeologos from "../Componentes/ListaTeologos"

export default class TeologosPagina extends React.Component {

    teologos = [
        {
            nombre: "John MacArthur",
            img: "https://s3.amazonaws.com/static.gracechurch.org/images/leaders/macarthur-john.jpg"
        },
        {
            nombre: "John Piper",
            img: "https://pbs.twimg.com/profile_images/1269457942316802050/8o7_3RXz_400x400.jpg"
        },
        {
            nombre: "A. W. Tozer",
            img: "https://www.mitiendaevangelica.com/biblioteca/autores/Tozer-1.jpg"
        },
        {
            nombre: "R. C. Sproul",
            img: "https://www.ligonier.es/wp-content/uploads/2015/12/RC-Sproul-1.png"
        }
    ]

    render() {
        return (
            <>
                <h2>Teologos</h2>
                <ListaTeologos teologos={this.teologos} />
            </>
        );
    }
}