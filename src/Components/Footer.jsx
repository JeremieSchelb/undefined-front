import {Link} from "react-router-dom";

const links = ["Plan du site", "Livre d’or", "Qui sommes nous", "Presse", "Mentions légales"]

const Footer = (props) => {
    return (
        <footer className={'py-5 bg-black'}>
            <div className={'max-w-prose md:max-w-screen-xl m-auto flex flex-col items-center md:items-baseline'}>
                <div className={'flex flex-col md:flex-row md:justify-between items-center w-full'}>
                    <ul className={'flex flex-col md:flex-row'}>
                        {links.map(link => <li className={'py-2 md:px-4 text-light-grey'}><Link to={link}>{link}</Link>
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
