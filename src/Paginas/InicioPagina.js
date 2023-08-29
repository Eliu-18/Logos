import React from "react";
import Teologos from '../Componentes/teologos';

export default class InicioPagina extends React.Component {

    render() {
        return (
            <div className="container pt-4">
                    
                <h2>Inicio</h2>
                <p>Bienvenido a mi página donde doy a conocer a los mejores teólogos de la historia.</p>
                    
                <Teologos 
                nombre="John MacArthur"
                img="https://s3.amazonaws.com/static.gracechurch.org/images/leaders/macarthur-john.jpg"
                descripcion="John MacArthur es un destacado pastor y teólogo evangelista conocido por su enfoque en la enseñanza bíblica precisa y su influencia en la comunidad cristiana a través de sus libros y conferencias." />

                <Teologos 
                nombre="John Piper"
                img="https://pbs.twimg.com/profile_images/1269457942316802050/8o7_3RXz_400x400.jpg"
                descripcion="John Piper es un influyente pastor reformista y autor cristiano, reconocido por su énfasis en la teología de la reforma y su enfoque en la supremacía de Dios en todas las áreas de la vida." />
                    
                <Teologos 
                nombre="A. W. Tozer" 
                img="https://www.mitiendaevangelica.com/biblioteca/autores/Tozer-1.jpg"
                descripcion="AW Tozer fue un pastor y escritor cristiano conocido por su profundo enfoque en la búsqueda de una relación cercana con Dios y su énfasis en la adoración sincera y la espiritualidad profunda. Sus obras literarias han dejado un impacto duradero en la vida devocional de muchos creyentes." />

                <Teologos 
                nombre="R. C. Sproul" 
                img="https://www.ligonier.es/wp-content/uploads/2015/12/RC-Sproul-1.png"
                descripcion="RC Sproul (1939-2017) fue un influyente teólogo, autor y pastor reformado de Estados Unidos. Reconocido por su claridad en la enseñanza y su compromiso con la teología reformada, Sproul fundó Ligonier Ministries para promover la educación teológica. Sus escritos, conferencias y ministerio dejaron un impacto duradero en la comunidad cristiana al resaltar la soberanía de Dios y la importancia de la sana doctrina." />

            </div>
        );
    }
}