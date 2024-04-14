import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    console.log(query);
  };

  return (
    <>
      <input type="text" value={query} onChange={handleChange} />
      <button type="button" onClick={handleClick} >
        S
      </button>
    </>
  );
};

export default Search;
