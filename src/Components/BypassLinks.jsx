const BypassLinks = (props) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const search = document.querySelector(`#${props.idSearch}`);
    search.focus();
  };

  return (
    <div className="fixed space-x-8 top-0 w-full bg-black text-white text-lg py-8 focus-within:py-4 opacity-0 focus-within:opacity-100 pointer-events-none focus-within:pointer-events-auto">
      {props.idMenu ? <a href={`#${props.idMenu}`}>Aller au menu</a> : ''}
      {props.idSearch ? <a href={`#${props.idContent}`} onClick={handleSearch}>Aller à la recherche</a> : ''}
      {props.idContent ? <a href={`#${props.idContent}`}>Aller au contenu</a> : ''}
    </div>
  )
}

export default BypassLinks;