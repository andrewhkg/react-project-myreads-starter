import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchBook extends Component {

  state = {
    query: '',
    showBooks: []
  }

  search = (query) => {
    if (this.state.query === '') {
    BooksAPI.search(query).then(
      (books) => {
        const savedBooks = this.props.savedBooks
        let showBooks = books.map((book) => {
          let temp = savedBooks.filter((savedBook) => book.id === savedBook.id)[0]
          return (temp)? temp: book
        })
        this.setState({showBooks: showBooks})
        this.setState({ query: query.trim()})
      }
    )
 }
}

  render() {
      const { showBooks } = this.state
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" onChangeCapture={(e) => this.search(e.target.value)} placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {showBooks.map((book) =>
                    <li key={book.id}>
                      <Book
                        book={book}
                        onUpdateBook={this.props.onUpdateBook}
                      />
                    </li>
                )}
            </ol>
          </div>
        </div>
      )
    }
  }

export default SearchBook
