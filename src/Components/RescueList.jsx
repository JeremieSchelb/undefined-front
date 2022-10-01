import RescueCard from "./RescueCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RescueList() {

    const [RescueData, setRescueData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/rescues').then(response => {
            setRescueData(response.data.data.splice(0, 3));
        });
    }, []);

    const list = () => {
        return RescueData.map(item => (
            <li key={item.id}>
                <RescueCard data={item} />
            </li>
        ));
    };

    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-16 max-w-screen-xl m-auto mt-16">
            {list()}
        </ul>
    );
}
