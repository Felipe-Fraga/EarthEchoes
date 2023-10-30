import { FaBars } from 'react-icons/fa';

export const NavBar = () => {
    return (<>
        <ul className="bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-md sm:items-center ">
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>New</li>
            <li><a href="#"></a>Page</li>
            <li><a href="#"></a>Trending</li>
            <li><a href="#"></a>Categories</li>
        </ul>
        <FaBars size={20} className='h-6 cursor-pointer sm:hidden'/>
    </>)
}