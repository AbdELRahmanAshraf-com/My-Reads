import React, { Component } from "react";
import List from "./List";
import Search from "./Search";
import { Route } from "react-router-dom";
import "./App.css";
import * as API from "./BooksAPI";
class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    API.getAll().then(books => {
      this.setState({
        books,
      });
    });
  };

  changeShelf = (book, shelf) => {
    // this.state.books.includes(book) &&
    // this.state.books.forEach(element => {
    //   if (element.id === book.id) {
    //     element.shelf = shelf;
    //     this.setState({});
    //   }
    // });
    API.update(book, shelf).then(this.getAllBooks);
  };
  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => (
            <List books={this.state.books} onChangeShelf={this.changeShelf} />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <Search
              onChangeShelf={(book, shelf) => this.changeShelf(book, shelf)}
              viewedBooks={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
