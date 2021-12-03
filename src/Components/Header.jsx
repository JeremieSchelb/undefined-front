import {Link} from "react-router-dom";
import React, { useContext } from "react";
import { NavigationContext } from '../Context/navigation'

const Header = (props) => {
    const links = useContext(NavigationContext);
    return (
        <header className={'max-w-screen-xl flex py-5 items-center m-auto justify-between'}>
            <nav className={'flex items-center'}>
            <img src="img/logo.png" alt=""/>
                <ul className={'flex'}>
                    {links.map(item => <li className={'px-5 hover:bg-light-blue hover:text-light-grey'} key={item.name}><Link to={'/liste/'+item.name}>{item.name}</Link></li>)}
                </ul>
            </nav>
            <img src="img/search.svg" alt=""/>
        </header>
    )

}
export default Header;
