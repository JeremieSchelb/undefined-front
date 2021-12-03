import Search from "../Components/Search";
import CardsList from "../Components/CardsList";
import RescueList from "../Components/RescueList";


export default function Homepage() {
    return <div className={'max-w-screen-xl m-auto'}>
        <Search/>
        <h3 className={'font-semibold mt-24 text-4xl text-left'}>Les dernières sorties en mers</h3>
        <RescueList/>
        <h3 className={'font-semibold mt-24 text-4xl text-left'}>Les dernières glossaires</h3>
        <CardsList/>
    </div>
}
