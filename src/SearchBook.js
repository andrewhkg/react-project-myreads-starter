import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import Nobook from './Nobook'
import { Link } from 'react-router-dom'

class SearchBook extends Component {

  state = {
    query: '',
    showBooks: [],
    noBooksFound: false
  }

  search = (query) => {
    if (query) {

      BooksAPI.search(query).then((books) => {
          if ("undefined" === typeof books.error) {

            const savedBooks = this.props.savedBooks
            let showBooks = books.map((book) => {
              let temp = savedBooks.filter((savedBook) => book.id === savedBook.id)[0]
              return (temp)? temp: book
            })
            this.setState({showBooks: showBooks})
            this.setState({ query: query.trim()})
            this.setState({noBooksFound: false})
          } else {
            this.setState({noBooksFound: true})
            this.setState({showBooks: []})
          }
        }
      )
    }

  }

  render() {
      const { showBooks, noBooksFound } = this.state
      console.log("no books found", noBooksFound)
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
              { !noBooksFound ? showBooks.map((book) =>
                  <li key={book.id}>
                    <Book
                      book={book}
                      onUpdateBook={this.props.onUpdateBook}
                    />
                  </li>
                ) :
                <Nobook />}
            </ol>
          </div>
        </div>
      )
    }
  }

export default SearchBook
