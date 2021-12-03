export default function InputText({value, prop, onChangeCallback}){
    return <div className="input__container">
        <label className="input__label" htmlFor={prop}>{prop}</label>
        <input className="input" type="text" id={prop} value={value} onChange={onChangeCallback} />
    </div>
}