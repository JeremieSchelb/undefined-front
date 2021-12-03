// import { Link } from 'react-router-dom';

import {Link} from "react-router-dom";

const links = ["accueil", "sauveteurs", "sorties en mer", "stations", "naufragés", "bateaux", "glossaire"]
const Header = (props) => {
    return (
        <header className={'max-w-screen-xl flex py-5 items-center m-auto justify-between'}>
            <nav className={'flex items-center'}>
            <img src="img/logo.png" alt=""/>
                <ul className={'flex'}>
                    <ul className={'flex'}>
                        {links.map(link => <li className={'px-5 hover:bg-light-blue hover:text-light-grey'}><Link to={link}>{link}</Link></li>)}
                    </ul>
                </ul>
            </nav>
            <img src="img/search.svg" alt=""/>
        </header>
    )

}
export default Header;
