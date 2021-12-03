import ArticleCard from "./ArticleCard";

export default function CardsList() {

    const list = () => {
        let items = [
            {id:0, title: 'titre 1', desc: 'Description 2'},
            {id:1, title: 'titre 2', desc: 'Description 2'},
        ];
        return items.map(item => (
            <li key={item.id}>
                <ArticleCard data={item}/>
            </li>
        ));
    };

    return (
        <ul className="grid grid-cols-2 gap-x-16">
            {list()}
        </ul>
    );
}