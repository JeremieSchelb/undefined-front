export default function Button({children, onClickCallback}){
    return <button onClick={onClickCallback} className="button">
        {children}
    </button>
}