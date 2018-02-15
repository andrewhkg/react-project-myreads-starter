import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

  class BookShelf extends Component {

  static protoType = {
    books: PropTypes.array.isRequired
  }

  render() {
   const { books } = this.props
    let title = ''
    if (this.props.title) {
      title = <h2 className="bookshelf-title">{this.props.title}</h2>
    }

    return (
      <div className="bookshelf">
         {title }
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) =>
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

export default BookShelf
