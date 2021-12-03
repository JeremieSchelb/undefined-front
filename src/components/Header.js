import { a } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={'max-w-screen-xl flex py-5 items-center m-auto justify-between'}>
            <img src="img/logo.png" alt=""/>
            <ul className={'flex'}>
                <li className={'px-5'}><a>Accueil</a></li>
                <li className={'px-5'}><a>Sauveteurs</a></li>
                <li className={'px-5'}><a>Sorties en mer</a></li>
                <li className={'px-5'}><a>Stations</a></li>
                <li className={'px-5'}><a>Naufragés</a></li>
                <li className={'px-5'}><a>Bateaux</a></li>
                <li className={'px-5'}><a>Glossaire</a></li>
            </ul>
            <img src="img/search.svg" alt=""/>
        </header>
    )

}
export default Header;
