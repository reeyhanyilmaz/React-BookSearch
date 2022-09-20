import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import ModalComp from "../ModalComp";
import { Grid, GridItem } from '@chakra-ui/react'

function Cards() {
  const books = useSelector((state) => state.search.books);
  console.log("books ", books);

  return (
    <div className="cardsDiv">
      {books.length < 1 ? (
          <img src="./assets/search.png" alt="search" className="searchIcon"/>
      ) : (
        books.map((item, i) => {
          return (
            <Grid key={i} templateColumns='repeat(4, 1fr)' gap={6} className="cardContainer">
              <GridItem w='100%' h='10' className="content">
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
              </GridItem>
            </Grid>
          );
        })
      )}
    </div>
  );
}

export default Cards;
