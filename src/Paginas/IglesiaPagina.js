import React from "react";
import Iglesia from '../Componentes/Iglesia';

export default class IglesiaPagina extends React.Component {

    render() {
        return (
            <div className="container pt-4">
                    
                <h2>Iglesias</h2>
                <p>Conoce las Iglesias de estos grandes teólogos</p>
                    
                <Iglesia 
                nombre="Grace Community Church"
                img="https://julieroys.com/wp-content/uploads/2020/03/29133847_1763602870365118_3949464570338213888_o-1024x683.jpg"
                descripcion='La Iglesia de John MacArthur, conocida como "Grace Community Church", es una congregación cristiana evangélica ubicada en Sun Valley, California. Fundada en 1956, se ha convertido en un influyente centro de adoración y enseñanza bíblica. Con John MacArthur como su pastor principal desde 1969, la iglesia se caracteriza por su enfoque en la predicación expositiva y una profunda adherencia a la teología reformada. Grace Community Church es reconocida por su compromiso con la sana doctrina, la reverencia en el culto y la importancia de una comunidad de creyentes comprometidos. Además de su ministerio local, la iglesia también es conocida por el ministerio de radio "Grace to You" de John MacArthur, que difunde sus enseñanzas bíblicas en todo el mundo. La iglesia ha tenido un impacto significativo en la educación teológica y espiritual de muchos creyentes, promoviendo una fe arraigada en las Escrituras y el Evangelio centrado en Cristo.' />

                <Iglesia 
                nombre="HeartCry Missionary Society"
                img="https://i.ytimg.com/vi/-K5M5fc0sQY/maxresdefault.jpg"
                descripcion='La Iglesia de Paul Washer, conocida como "HeartCry Missionary Society", está asociada con el ministerio de Paul Washer, un predicador y misionero evangélico. Aunque no es una iglesia en el sentido tradicional, HeartCry se dedica a la formación de líderes, plantación de iglesias y misiones en todo el mundo. Paul Washer es conocido por su énfasis en la sana doctrina, la vida piadosa y el arrepentimiento genuino. A través de su ministerio, busca llevar a los creyentes a una fe auténtica y comprometida con la Palabra de Dios.' />
                    
                <Iglesia 
                nombre="Bethlehem Baptist Church" 
                img="https://upload.wikimedia.org/wikipedia/commons/c/c0/Photo_of_John_Piper%2C_Oct_2010.jpg"
                descripcion='La Iglesia de John Piper, conocida como "Bethlehem Baptist Church", es una congregación cristiana evangélica con sede en Minneapolis, Minnesota. Fundada en 1871, ha sido pastoreada por John Piper desde 1980 hasta su jubilación en 2013. La iglesia se caracteriza por su enfoque en la teología reformada, la predicación expositiva y la importancia de la adoración centrada en Dios. Bethlehem Baptist Church es conocida por su énfasis en la alegría en Dios y el llamado a vivir en conformidad con su gloria. Además de su ministerio local, John Piper es famoso por su escritura y conferencias, que han influido en creyentes de todo el mundo. La iglesia ha tenido un impacto duradero en la comunidad cristiana al promover una vida comprometida con la adoración, la doctrina bíblica y la misión global.' />

                <Iglesia 
                nombre="Saint Andrew's Chapel" 
                img="https://es.ligonier.org/wp-content/uploads/2018/02/RCSproul-Blog.jpg"
                descripcion='La Iglesia de R.C. Sproul, conocida como "Saint Andrews Chapel", fue una congregación cristiana reformada situada en Sanford, Florida. Fundada por R.C. Sproul en 1997, la iglesia se caracterizó por su enfoque en la predicación expositiva, la teología reformada y la enseñanza sólida de las Escrituras. R.C. Sproul, reconocido teólogo y autor, desempeñó un papel fundamental en la enseñanza y el liderazgo de la iglesia, promoviendo la sana doctrina y una comprensión profunda de la fe cristiana. Aunque R.C. Sproul falleció en 2017, su legado teológico y su impacto en la comunidad cristiana continúan siendo influyentes a través de sus escritos, enseñanzas y el ministerio de Ligonier Ministries, organización fundada por él.' />

            </div>
        );
    }
}