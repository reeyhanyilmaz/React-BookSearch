import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookData, setSearch } from "../../redux/searchSlice";

function SearchInput() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.search);
  console.log("search", search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBookData(search));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchInput;
