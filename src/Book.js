import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  static protoType = {
    book: PropTypes.array.isRequired
  }
  shelfChanger = (book, e) => {
    e.preventDefault()
    if (this.props.onUpdateBook) {
      this.props.onUpdateBook(book, e.target.value)
    }
  }

    render () {
    const { book } = this.props
    return (
      <div className="book">
        <div className="book-top">
          {/* added logic to check if image thumbnail existed or not (avoide in console error if thumnail doesnt exist first), and second, if not rendered image cover of book from placeholder.com */}
          <div className="book-cover"
            style={{ width: 128, height: 193,
              backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail?  `${book.imageLinks.thumbnail}` : `http://via.placeholder.com/128x193?text=No%20Cover`})`
            }}>
          </div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(e) => {this.shelfChanger(book, e)}}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors? book.authors.map((author) =>
          <div key={author} className="book-authors">{author}</div>
        ):''}
      </div>
    )
  }
}
export default Book
