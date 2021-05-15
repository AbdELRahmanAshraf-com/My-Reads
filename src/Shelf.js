import React from "react";
import Book from "./Book";

const Shelf = ({ title = "", books, onChangeShelf }) => {
  return (
    <div>
      <div className='bookshelf'>
        {title !== "" && <h2 className='bookshelf-title'>{title}</h2>}
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books &&
              books
                .filter(book => book.imageLinks?.thumbnail && book.authors)
                .map(book => (
                  <Book
                    onChangeShelf={onChangeShelf}
                    key={book.id}
                    book={book}
                  />
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
