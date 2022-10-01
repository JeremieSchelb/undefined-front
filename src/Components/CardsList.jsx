import ArticleCard from "./ArticleCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardsList() {

    const [ListData, setListData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/articles').then(response => {
            setListData(response.data.data);
        });
    }, []);

    const list = () => {
        return ListData.map(item => (
            <li key={item.id}>
                <ArticleCard data={item} />
            </li>
        ));
    };

    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 max-w-screen-xl m-auto mt-16">
            {list()}
        </ul>
    );
}
