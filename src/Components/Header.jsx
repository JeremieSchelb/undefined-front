import { useEffect } from "react";
import {Link} from "react-router-dom";
import useToggle from "../Hooks/useToggle"

const links = ["accueil", "sauveteurs", "sorties en mer", "stations", "naufragés", "bateaux", "glossaire"]
const Header = (props) => {

    const [open, toggleOpen] = useToggle(false)

    return (
        <header className="header">
            <img onClick={() => toggleOpen(true)} className="xl:hidden cursor-pointer" src="img/burger.svg" alt=""/>
            <div><img className="hidden xl:inline-block" src="img/logo.png" alt=""/></div>
            <nav className={`fixed inset-0 bg-light-grey flex flex-col gap-2 p-5 transition-transform xl:static ${open ? "" : "transform -translate-x-full xl:-translate-x-0"}`}>
                <img style={{maxWidth : '25px'}} onClick={() => toggleOpen(false)} className="xl:hidden cursor-pointer" src="img/burger-off.svg" alt=""/>
                <ul className={'flex flex-col xl:flex-row'}>
                    {links.map(link => <li key={link} className={'p-3 up-first transition rounded-md hover:bg-light-blue hover:text-light-grey'}><Link to={link}>{link}</Link></li>)}
                </ul>
            </nav>
            <img onClick={() => toggleOpen()} className="xl:hidden mx-auto" src="img/logo.png" alt=""/>
            <img src="img/search.svg" className="cursor-pointer ml-auto" alt=""/>
        </header>
    )
}
export default Header;
