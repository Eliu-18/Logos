import React from "react";
import Libros from "../Componentes/Libros"

export default class LibrosPagina extends React.Component {

    render() {
        return (
            <div className="container pt-4">

                <h2>Libros:</h2>
                <p>Conoce los mejores libros escritos por estos autores.</p>

                <Libros 
                nombre="Difícil de creer"
                img="https://m.media-amazon.com/images/I/81l04uwnPGL._AC_UF1000,1000_QL80_.jpg"
                descripcion="'Difícil de Creer' es una obra valiosa de John MacArthur en la que aborda temas desafiantes y controvertidos del Evangelio. MacArthur desafía la superficialidad y la complacencia al explorar pasajes bíblicos que abordan cuestiones difíciles como la predestinación, el infierno, la soberanía divina y la responsabilidad humana. A través de su enfoque exegético y su claridad teológica, invita a los lectores a confrontar estas realidades incómodas con humildad ya profundizar en su comprensión de las Escrituras. El libro se convierte en un recurso que anima a los creyentes a abrazar una fe fundamentada en la verdad completa de la Palabra de Dios, en lugar de evitar o simplificar los aspectos desafiantes de la doctrina cristiana." />

                <Libros 
                nombre="El Evangelio según Pablo"
                img="https://libreriaclcperu.com/_CLCPeru/images/products/large/2912.jpg"
                descripcion="'El Evangelio según Pablo' de John MacArthur es un análisis profundo de las enseñanzas apostólicas de Pablo en el Nuevo Testamento. MacArthur explora las epístolas de Pablo y presenta su comprensión del Evangelio centrado en Cristo y su gracia. A través de un enfoque exegético, MacArthur resalta la importancia de la justificación por la fe y la obra redentora de Cristo en contraposición a la legalidad y el legalismo. Con énfasis en la sana doctrina, el libro ofrece una perspectiva esclarecedora sobre cómo Pablo abordó temas teológicos y morales en las iglesias tempranas. A través de este estudio, MacArthur invita a los lectores a comprender y abrazar el mensaje transformador del Evangelio tal como lo proclamó el apóstol Pablo." />
                    
                <Libros 
                nombre="El Evangelio según JesuCristo" 
                img="https://m.media-amazon.com/images/I/51mktulK5tL._AC_UF1000,1000_QL80_.jpg"
                descripcion="'El Evangelio según Jesucristo' de John MacArthur es una exploración profunda de la vida y el mensaje de Jesús. MacArthur examina las enseñanzas de Jesús y su ministerio terrenal, enfocándose en su llamado al arrepentimiento, la fe y la relación con Dios. A través de un enfoque exegético y contextual, el autor resalta la importancia de comprender la naturaleza completa del Evangelio, incluida la soberanía de Dios y la gracia redentora de Cristo. El libro desafía a los lectores a mirar más allá de las interpretaciones simplistas y abrazar el mensaje integral de Jesús, que invita a una entrega total a Él y un compromiso genuino con su reino y sus enseñanzas." />

                <Libros 
                nombre="El Evangelio según Dios" 
                img="https://www.mitiendaevangelica.com/portadas/9780825457890.jpg"
                descripcion="'El Evangelio según Dios' de John MacArthur es un enfoque profundo en la naturaleza misma de Dios y su papel en el Evangelio. MacArthur explora cómo Dios, como el Autor del Evangelio, revela su carácter y sus propósitos en las Escrituras. A través de una perspectiva teológica y bíblica, el libro destaca la trascendencia divina, la santidad y la gracia en el contexto del plan de redención. MacArthur desafía a los lectores a comprender que el Evangelio es más que un simple mensaje de salvación, sino una proclamación de la gloria y la majestuosidad de Dios. El libro instala a los creyentes a tener una visión más profunda y transformadora de la obra de Dios en la redención de la humanidad." />

                <Libros 
                nombre="El Evangelio según los Apóstoles" 
                img="https://m.media-amazon.com/images/I/81y9pZq3UtL._AC_UF1000,1000_QL80_.jpg"
                descripcion="'El Evangelio según los Apóstoles' de John MacArthur es un análisis exhaustivo de las enseñanzas de los apóstoles en el Nuevo Testamento. MacArthur explora cómo los apóstoles interpretaron y transmitieron el mensaje de Jesús, centrándose en temas como la justificación, la fe y la santificación. A través de un enfoque teológico y exegético, el libro resalta la continuidad del Evangelio a lo largo de los escritos apostólicos, desafiando interpretaciones distorsionadas y destacando la coherencia de las enseñanzas bíblicas. MacArthur busca ofrecer una comprensión más profunda y precisa de cómo los apóstoles aplicaron y extendieron el mensaje de salvación a través de sus enseñanzas y epístolas, invitando a los lectores a una relación más profunda con Dios a través de Cristo." />

            </div>
        );
    }
}