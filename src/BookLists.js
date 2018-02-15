import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookLists extends Component {
  static propTypes = {
      books: PropTypes.array.isRequired
    }

  render () {
    const { books } = this.props
    let curReadBooks, wantToReadBooks, readBooks
      curReadBooks = books.filter((book) => book.shelf === "currentlyReading")
      wantToReadBooks = books.filter((book) => book.shelf === "wantToRead")
      readBooks = books.filter((book) => book.shelf === "read")

    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf
                title="currentlyReading"
                books={curReadBooks}
                onUpdateBook={this.props.onUpdateBook}
              />
              <BookShelf
                title="wantToRead"
                books={wantToReadBooks}
                onUpdateBook={this.props.onUpdateBook}
              />
              <BookShelf
                title="read"
                books={readBooks}
                onUpdateBook={this.props.onUpdateBook}
              />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
    )
  }

}

export default BookLists
