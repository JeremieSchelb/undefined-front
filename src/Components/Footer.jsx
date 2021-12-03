import {Link} from "react-router-dom";
import React, {useContext} from "react";
import { NavigationContext } from "../Context/navigation";
import Icon from "./Icon";

const Footer = (props) => {
    const links = useContext(NavigationContext);
    return (
        <footer className={'py-5 bg-black mt-24'}>
            <div className={'max-w-prose md:max-w-screen-xl m-auto flex flex-col items-center md:items-baseline'}>
                <div className={'flex flex-col md:flex-row md:justify-between items-center w-full'}>
                    <ul className={'flex flex-col md:flex-row'}>
                        {links.map(item => <li className={'py-2 md:px-4 text-light-grey'} key={item.name}><Link to={item.link}>{item.name}</Link>
                        </li>)}
                    </ul>
                    <div className={'flex space-x-10'}>
                        <a className="opacity-60 hover:opacity-100 focus:opacity-100" href="https://www.facebook.com/groups/938396409644949" title="Facebook">
			                <Icon name="facebook"/>
                        </a>
                        <a className="opacity-60 hover:opacity-100 focus:opacity-100" href="https://twitter.com/@boutelierphili1">
			                <Icon name="twitter"/>
                        </a>
                    </div>
                </div>
                <p className={'flex items-center text-light-grey md:px-4 mr-2 opacity-60'}>
                    Créer par
                    <Icon className='ml-2' name="undefined"/>
                </p>
            </div>
        </footer>
    )
}
export default Footer;
