import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Switch,Route } from 'react-router-dom'
import BookLists from './BookLists'
import SearchBook from './SearchBook'
import ErrorPage404Name from './ErrorPage404Name'

class BooksApp extends Component {
  state = {
    books: []
  }
// Get all books from server
componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
}

updateBook = (book, newShelf) => {
  BooksAPI.update(book, newShelf).then(() => {
    let filterState = this.state.books.filter((b) => b.id !== book.id)
    book.shelf = newShelf
    let newState = filterState.concat([book])
    this.setState({books: newState})
  })
}
  render() {
    return (
      <div className='app'>
        <Switch>

          <Route exact path="/" render={() => (
            <BookLists
              books={this.state.books}
              onUpdateBook={(book, newShelf) => {
                this.updateBook(book, newShelf)
              }}
            />
          )}
        />
        <Route path="/search" render={() => (
          <SearchBook
            savedBooks={this.state.books}
            onUpdateBook={(book, newShelf) => {
              this.updateBook(book, newShelf)
            }}
          />
        )}
      />
      <Route component={ErrorPage404Name} />

        </Switch>
      </div>
    )
  }
}
export default BooksApp
