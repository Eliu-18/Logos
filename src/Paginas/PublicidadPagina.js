import React from "react";

export default class PublicidadPagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lanzamientos: []
        }
    }

    componentDidMount() {
        fetch("https://musicbrainz.org/ws/2/release?artist=9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa&fmt=json")
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            this.setState({
                lanzamientos: result.releases
            })
        })
    }

    render() {
        return (
             <>
                <h2 className="my-4">Los lanzamientos de la banda the Who:</h2>
                {this.state.lanzamientos.map((lanzamiento) => (
                    <p>{lanzamiento.title} ({lanzamiento.date})</p>
                ))}
             </>
        );
    }
}