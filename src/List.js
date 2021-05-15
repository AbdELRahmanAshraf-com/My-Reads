import React from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const List = ({ books, onChangeShelf }) => {
  const shelfs = [
    {
      title: "Currently Reading",
      id: "currentlyReading",
    },
    {
      title: "Want To Read",
      id: "wantToRead",
    },
    {
      title: "Read",
      id: "read",
    },
  ];
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        {shelfs.map(shelf => (
          <Shelf
            onChangeShelf={onChangeShelf}
            key={shelf.id}
            title={shelf.title}
            books={books.filter(book => book.shelf === shelf.id)}
          />
        ))}
      </div>
      <div className='open-search'>
        <Link to='/search' className='button'>
          Add a book
        </Link>
      </div>
    </div>
  );
};

List.propTypes = {
  books: PropTypes.array.isRequired,
};
export default List;
