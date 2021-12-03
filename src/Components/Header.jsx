import { Link } from "react-router-dom";

const links = ["accueil", "sauveteurs", "sorties en mer", "stations", "naufragés", "bateaux", "glossaire"]

const Header = (props) => {

    return (
        <header className={'max-w-screen-xl flex py-5 items-center m-auto'}>
            <img src="img/logo.png" alt=""/>
            <nav>
                <ul className={'flex'}>
                    {links.map(link => <li className={'px-5 up-first'}><Link to={link}>{link}</Link></li>)}
                </ul>
            </nav>
            <img className="ml-auto" src="img/search.svg" alt=""/>
        </header>
    )

}
export default Header;
