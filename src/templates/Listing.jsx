import axios from "axios";
import {useEffect, useState} from "react";

export default function Listing(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.undefined.oserya.fr/api/${props.type}`)
        .then(res => {
            setItems(res.data.data)
        });
    });

    return (
        <main>
            <ul className="list-none">
            {items.map(item => (
                <li key={item.id}>
                    <div className="flex justify-between">
                        <h2>{item.name}</h2>
                        <span>{item.created_at}</span>
                    </div>
                    <p>{item.description}</p>
                </li>
            ))}
            </ul>
        </main>
    );
}
