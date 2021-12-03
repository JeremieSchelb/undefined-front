import { useState } from "react";
import axios from "axios";

export default function ArticleCard(props) {
    const [data, setData] = useState(props.data);



	return (
		<div className="card shadow-md">
			<img className="w-full h-60 object-cover object-center" src={data.image} alt="" />
			<main className="py-8 px-14 text-left">
				<h2 className="uppercase font-bold text-xl mb-2">{data.title}</h2>
				<p>{data.content.substr(2)}</p>
				<button className="button button--b ml-auto mt-6">En savoir plus</button>
			</main>
		</div>
	);
};
