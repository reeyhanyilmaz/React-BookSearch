import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import ModalComp from "../ModalComp";

function Cards() {
  const books = useSelector((state) => state.search.books);
  console.log("books ", books);

  return (
    <div className="cardsDiv">
      {books.length < 1 ? (
        <div className="searchIconDiv">
          <img src="./assets/search.png" alt="search" className="searchIcon"/>
          </div>
      ) : (
        books.map((item, i) => {
          return (
            <div key={i} className="cardContainer">
              <div  className="content">
                <img
                  src={item.volumeInfo.imageLinks.smallThumbnail}
                  alt="books"
                />
                <p className="title">{item.volumeInfo.title}</p>
                <p className="author">
                  <strong>{item.volumeInfo.authors}</strong>
                </p>
                <div className="cardFooter">
                  <a href={item.volumeInfo.canonicalVolumeLink} target="_blank">
                    Preview
                  </a> | <ModalComp desc={item.volumeInfo.description} />
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Cards;
