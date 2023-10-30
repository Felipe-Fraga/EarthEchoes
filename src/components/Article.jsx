import fondoDesktop from '../images/fondoDesktop.jpg'

export const Article = () => {
    return (
        <section className='mb-12'>
            <div className='sm:flex mb-6'>
                <div className='flex-1 py-6'>
                    <h2 className='text-[40px] text-dark dark:text-white font-bold sm:text-[58px] leading-none'>Explorando el Planeta Tierra</h2>
                </div>
                <div className='flex-1 sm:pt-9'>
                    <p className='text-[13px] sm:text-[15px] mb-10 dark:text-white'>La Tierra, nuestro hogar en el vasto cosmos, es un mundo único y asombroso que alberga una diversidad incomparable de vida y maravillas naturales. Descubre las maravillas de nuestro planeta a través de noticias, imágenes y datos interesantes.</p>
                    <a href='https://es.wikipedia.org/wiki/Tierra' target='_blank'>
                        <button className='bg-dark dark:bg-light hover:bg-blue w-[185px] h-[48px] text-white dark:text-white'>LEER MAS</button>
                    </a>
                </div>
            </div>
            <picture>
                {/* <source media='(max-width: 640px' srcSet=""/>
                <source media='(min-width: 641px' srcSet={fondoDesktop}/> */}
                <img src={fondoDesktop} alt="imagen" />
            </picture>
        </section>
    )
}