import React from "react";

export default class Iglesia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            escondido: false
        }

        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder() {
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }))
    }

    render() {
        return (
            <div className="row my-4">
                <div className={"col-12 d-flex align-items-center " + (this.state.escondido ? "d-none" : "")}>
                    <img src={this.props.img} className="teologo-img" />
                    <div className="px-3">
                        <h2>{this.props.nombre}</h2>
                        <p>{this.props.descripcion}</p>
                    </div>
                </div>
                <div className="col-12">
                    <button className={"btn " + (this.state.escondido ? "btn-success" : "btn-danger")} onClick={this.toggleEsconder}>
                        {this.state.escondido ? "Mostrar" : "Ocultar"}
                    </button>
                </div>
            </div>
        );
    }
}