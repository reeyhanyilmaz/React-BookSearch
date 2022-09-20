import React from "react";
import SearchInput from "../SearchInput";
import "./style.scss";

function Header() {
  return (
    <div className="headerDiv">
     <div className="leftPart">
      <p>Book Search</p>
      <SearchInput />
      </div>
    </div>
  );
}

export default Header;
