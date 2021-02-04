const Search = ({ setSearch, setIsSearch }) => {
  return (
    <div className="search">
      <h1>😎 Emoji Search 😎</h1>
      <input
        type="text"
        name="search"
        placeholder="what emoji are you looking for ?"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
