import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookData, setSearch } from "../../redux/searchSlice";
import { Button, Input } from "@chakra-ui/react";
import "./style.scss"

function SearchInput() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.search.search);
  console.log("search", search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBookData(search));
    dispatch(setSearch(""));
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit} className="form">
        <Input
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          variant='filled'
        />
        <Button colorScheme="purple" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchInput;
