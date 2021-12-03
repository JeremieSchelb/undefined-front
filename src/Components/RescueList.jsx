import RescueCard from "./RescueCard";

export default function RescueList() {

    const list = () => {
        let items = [
            {id:0, title: 'titre 1', desc: 'Description 2', 'save' : 19},
            {id:1, title: 'titre 2', desc: 'Description 2', 'save' : 19},
            {id:2, title: 'titre 3', desc: 'Description 3', 'save' : 19},
        ];
        return items.map(item => (
            <li key={item.id}>
                <RescueCard data={item}/>
            </li>
        ));
    };

    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-16 max-w-screen-xl m-auto mt-16">
            {list()}
        </ul>
    );
}
