import { Element } from './Element'

export const Container = () => {
    return(
        <aside className='bg-dark dark:bg-gray-800 text-white dark:text-white md:w-auto pt-[28px] px-[20px] lg:h-[650px] xl:h-[719px] rounded'>
            <h1 className='text-light dark:text-white text-4xl font-bold'>NEW</h1>
            <Element title='Descubrimiento en lo Profundo del Océano' text='Científicos han descubierto nuevas especies marinas en las profundidades del océano, arrojando luz sobre la vida en un ambiente tan misterioso como inexplorado.'/>
            <Element title='Cambio Climático Global' text='Últimas investigaciones sobre el cambio climático global y su impacto en el planeta, así como las medidas que se están tomando para mitigar sus efectos.'/>
            <Element title='Exploración Espacial' text='Actualizaciones sobre las misiones espaciales recientes que han explorado otros mundos y ampliado nuestro conocimiento del universo'/>
        </aside>
    )
}