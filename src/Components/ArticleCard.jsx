import { useState } from "react";
import axios from "axios";

export default function ArticleCard(props) {
    const [data, setData] = useState(props.data);

    function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + "..." : str;
      };

	return (
		<div className="card shadow-md">
			<img className="w-full h-60 object-cover object-center" src={data.image} alt="" />
			<main className="py-8 px-14 text-left">
<<<<<<< HEAD
				<h2 className="uppercase font-bold text-xl mb-4">{data.title}</h2>
				<p>{truncate(data.content, 120)}</p>
=======
				<h2 className="uppercase font-bold text-xl mb-2">{data.title}</h2>
				<p>{data.content}</p>
>>>>>>> develop
				<button className="button button--b ml-auto mt-6">En savoir plus</button>
			</main>
		</div>
	);
};
