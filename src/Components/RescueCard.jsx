import { useState } from "react";

export default function RescueCard(props) {
    const [data, setData] = useState(props.data);

    return (
        <div className="card shadow-md">
            <main className="py-8 px-14 text-left">
                <h2 className="uppercase font-bold text-xl mb-2">{data.location}</h2>
                <p>{data.report}</p>
                <button className="button button--b ml-auto mt-6">En savoir plus</button>
            </main>
        </div>
    );
};
