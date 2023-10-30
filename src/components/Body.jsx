import { Card } from "./Card"
import card01 from '../images/card01.jpg'
import card02 from '../images/card02.jpg'
import card03 from '../images/card03.jpg'
import card04 from '../images/card04.jpg'
import card05 from '../images/card05.jpg'


export const Body = () => {
    return (
        <section className="mt-6 md:flex md:flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 ">
                <Card img={card01} title={'Biodiversidad en los Bosques'} text={'Explora los bosques del mundo y su importancia para la ecología.'} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 ">
                <Card img={card02} title={'Fuerzas de la Naturaleza'} text={'Aprende sobre distintas fuerzas geológicas, desde volcanes hasta terremotos.'} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 ">
                <Card img={card03} title={'Los Cambios en los Polos'} text={'Descubre cómo los glaciares están respondiendo al calentamiento global.'} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 ">
                <Card img={card04} title={'Maravillas del Cielo'} text={'Maravíllate con las fenomenales auroras boreales y otras maravillas.'} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 ">
                <Card img={card05} title={'La Belleza de los Arrecifes de Coral'} text={'Adéntrate en la vida marina y la importancia de los arrecifes de coral.'} />
            </div>
        </section>
    );

}