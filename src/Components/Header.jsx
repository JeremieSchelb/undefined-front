import {Link} from "react-router-dom";
import React, { useContext } from "react";
import { NavigationContext } from '../Context/navigation'

const Header = (props) => {
    const links = useContext(NavigationContext);
    function linkTo(linkname) {
        switch (linkname) {
            case 'accueil':
                return '/';
            default:
                return '/liste/'+linkname;
        }
    }
    return (
        <header className={'max-w-screen-xl flex py-5 items-center mx-auto justify-between'}>
            <nav className={'flex items-center'}>
            <img src="img/logo.png" alt=""/>
                <ul className={'pl-8 flex'}>
                    {links.map(item => <li className={'px-5 hover:bg-light-blue hover:text-light-grey'} key={item.name}><Link to={linkTo(item.name)}>{item.name}</Link></li>)}
                </ul>
            </nav>
            <img className=" ml-8 py-2.5 cursor-pointer" src="static/svg/search.svg" alt=""/>
            <div>
                <input type="search" />
            </div>
        </header>
    )

}
export default Header;
