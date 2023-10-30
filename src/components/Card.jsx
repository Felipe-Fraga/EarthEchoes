export const Card = ({img, title, text}) => {
    return(
        <article className='flex h-auto md:w-[345px] my-6 lg:p-2 xl:w-[395px]'>
            <div className='w-[130px] flex-none lg:w-[160px]'>
                <img src={img} alt="" />
            </div>
            <div className='pl-3'>
                <h2 className='font-bold mg-[18px] dark:text-white hover:text-light cursor-pointer'>{title}</h2>
                <p className='text-dark dark:text-white'>{text}</p>
            </div>
        </article>
    )
}