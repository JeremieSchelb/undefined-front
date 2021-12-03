import axios from "axios";
import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router";
import { NavigationContext } from "../Context/navigation";

export default function Listing(props) {
    const [items, setItems] = useState([]);
    const params = useParams();
    const links = useContext(NavigationContext);
    useEffect(() => {
        if(params.name != "") {
            axios
            .get(`https://api.undefined.oserya.fr/api/${links.find(item => item.name == params.name).link}`)
            .then(res => {
                setItems(res.data.data)
            });
        }
    }, [params]);

    return (
        <div className="text-left">
            <h1 className="text-3xl font-bold uppercase mb-8">Liste des {params.name}</h1>
            <ul className="list-none">
            {items.map(item => (
                <li className="shadow-md p-4 my-4" key={item.id}>
                    <div className="flex justify-between">
                        <h2>{item.name}</h2>
                        <span>{item.created_at}</span>
                    </div>
                    <p>{item.description}</p>
                </li>
            ))}
            </ul>
        </div>
    );
}
