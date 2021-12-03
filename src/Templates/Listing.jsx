import axios from "axios";
import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router";
import { NavigationContext } from "../Context/navigation";
import ArticleTemplates from "../Components/ArticleTemplates";

export default function Listing(props) {
    const [items, setItems] = useState([]);
    const params = useParams();
    const links = useContext(NavigationContext);
    let error = null;
    useEffect(() => {
        let param = links.find(item => item.name == params.name);
        if(param) {
            axios
            .get(`https://api.undefined.oserya.fr/api/${param.link}`)
            .then(res => {
                setItems(res.data.data)
            });
        } else {
            error = <div>Une erreur est survenue, aucune donnée n'a été trouvée</div>;
        }
    }, [params]);
    return ( error ??
        <div className="text-left">
            <h1 className="text-3xl font-bold uppercase mb-8">Liste des {params.name}</h1>
            <ul className="list-none">
            {items.map(item => (
                <ArticleTemplates item={item} type={params.name} key={item.id}/>
            ))}
            </ul>
        </div>
    );
}
