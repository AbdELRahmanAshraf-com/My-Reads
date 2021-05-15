import React from "react";

function match(viewedBooks, book) {
  const filtered = viewedBooks?.filter(b => b.id === book.id) ?? [];
  const isExist = filtered.length !== 0;
  if (isExist) {
    return filtered[0];
  }
  return null;
}
const Book = ({ book, onChangeShelf, viewedBooks }) => {
  book = match(viewedBooks, book) ?? book;
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        />
        <div className='book-shelf-changer'>
          <select
            value={book && (book.shelf ?? "none")}
            onChange={e => {
              onChangeShelf(book, e.target.value);
            }}
          >
            <option value='move' disabled>
              Move to...
            </option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>
        {book.authors &&
          book.authors.map(author => <div key={author}>{author}</div>)}
      </div>
    </div>
  );
};

export default Book;
