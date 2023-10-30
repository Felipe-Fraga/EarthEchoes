export const Element = ({title, text}) => {
    return(
        <article className="h-auto border-b-2 border-light py-3 last:border-none">
            <h2 className="cursor-pointer hover:text-light text-[20px]  mb-3 font-bold">{title}</h2>
            <p className="text-[15px]">{text}</p>
        </article>
    )
}