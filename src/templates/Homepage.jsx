import InputText from "../Components/InputText";
import CardsList from "../Components/CardsList";

export default function Homepage(){
    return <div>
            <h1>Homepage</h1>
            <InputText onChangeCallback={null} prop={"hello"} value={"value"} />
            <CardsList />
        </div>
}