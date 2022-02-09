import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const Search = (props) => {
    const [SearchData, setSearchData] = useState([]);
    const [InputData, setInputData] = useState(null);

    let timeout = null;

    function handleSearchSelection(e) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            let input = e.target.value;
            setInputData(input);
            timeout = null;
            axios.get('https://api.undefined.oserya.fr/api/search/' + input).then(response => {
                setSearchData(response.data);
            });
        }, 500);
    }

    const result = () => {
        return SearchData.map(item => (
            <li key={item.id}>
                {item.title.split(InputData)[0]}<span class="text-light-red">{InputData}</span>{item.title.split(InputData)[1]}
            </li>
        ));
    };

    return (
        <div className={'flex flex-col items-center  w-5/12 m-auto mt-8'}>
            <h3 className={'text-2xl mb-4'}>Rechercher</h3>
            <div className={'flex w-full m-auto'}>
                <input onInput={e => handleSearchSelection(e)} type="text" className={'py-2 px-4 rounded-full focus:border-0 text-xs border-2 border-solid border-black w-full focus:ring-2 focus:ring-light-yellow'}
                    placeholder={'Bateaux, naufragé, sortie en mer, sauveteur...'} />
                <img className={'-ml-8'} src="static/svg/search.svg" alt="" />
                {/* <button type="submit" className="button button--b absolute left-full transform translate-x-6 top-1/2 -translate-y-1/2">Chercher</button> */}
            </div>
            <div>
                <p className={'font-bold'}></p>
                <ul>
                    {result()}
                </ul>
            </div>
        </div>
    );
};

export default Search;
