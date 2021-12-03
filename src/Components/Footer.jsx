import {Link} from "react-router-dom";
import React, {useContext} from "react";
import { NavigationContext } from "../Context/navigation";

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
                    <div className={'flex'}>
                        <img className={'p-4'} src="img/facebook.svg" alt=""/>
                        <img className={'p-4'} src="img/twitter.svg" alt=""/>
                    </div>
                </div>
                <div className={'flex items-center'}>
                    <p className={'text-light-grey md:px-4 mr-2'}> Créer par : </p>
                    <img src="img/undefined.png" alt=""/>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
