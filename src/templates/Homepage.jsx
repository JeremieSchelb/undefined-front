import InputText from "../Components/InputText";

export default function Homepage(){
    return <div>
            <h1>Homepage</h1>
            <InputText onChangeCallback={null} prop={"hello"} value={"value"} />
        </div>
}