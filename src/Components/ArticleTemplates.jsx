import { useEffect, useState } from "react"

export default function ArticleTemplates(props) {

    const [item, setItem] = useState(props.item);
    const [template, setTemplate] = useState('');

    useEffect(() => {
        console.log(item);

        switch (props.type) {
            case 'sauveteurs':
                setTemplate(
                    <li className="shadow-md p-4 my-4" >
                    <div className="flex justify-between">
                        <h2 className="font-bold">{item.lastname} {item.firstname}</h2>
                        <span>{item.created_at}</span>
                    </div>
                    <p>{item.biography}</p>
                </li>);
                break;
            case 'sorties en mer':
                setTemplate(
                    <li className="shadow-md p-4 my-4" >
                    <div className="flex justify-between">
                        <h2 className="font-bold">{item.location}</h2>
                        <span>{item.created_at}</span>
                    </div>
                    <p>{item.report}</p>
                </li>);
                break;
            case 'stations':
                setTemplate(
                    <li className="shadow-md p-4 my-4" >
                    <div className="flex justify-between">
                        <h2 className="font-bold">{item.name}</h2>
                        <span>{item.created_at}</span>
                    </div>
                    <p>{item.history}</p>
                </li>);
                break;
            case 'naufrages':
                setTemplate(
                    <li className="shadow-md p-4 my-4" >
                    <div className="flex justify-between">
                        <h2 className="font-bold">{item.lastname} {item.firstname}</h2>
                        <span>{item.created_at}</span>
                    </div>
                </li>);
                break;
            case 'bateaux' :
                setTemplate(
                <li className="shadow-md p-4 my-4" >
                    <div className="flex justify-between">
                        <h2 className="font-bold">{item.name}</h2>
                        <span>{item.created_at}</span>
                    </div>
                    <p>{item.description}</p>
                </li>);
                break;
        }
    }, [])

    return (
        template
    )
}