import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = (props) => {


    return (
        <div className={'flex flex-col items-center  w-5/12 m-auto mt-8'}>
            <h3 className={'text-2xl mb-4'}>Rechercher</h3>
            <div className={'flex w-full m-auto'}>
                <input type="text" className={'py-2 px-4 rounded-full focus:border-0 text-xs border-2 border-solid border-black w-full focus:ring-2 focus:ring-light-yellow'}
                       placeholder={'Bateaux, naufragé, sortie en mer, sauveteur...'}/>
                <img className={'-ml-8'} src="img/search.svg" alt=""/>
            </div>
            <div>
                <p className={'font-bold'}>ff</p>
                <ul >

                </ul>
            </div>
        </div>
    )
}
export default Search;
