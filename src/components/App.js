import React, { Component } from 'react';
import './App.css';
import Books from './Books/Books';




class App extends Component {


  state = {
    books: [
      {
        id: 1,
        name: 'JavaScript',
        price: 50
      },
      {
        id: 2,
        name: 'React',
        price: 5
      },
      {
        id: 3,
        name: 'Node',
        price: 30
      },
      {
        id: 4,
        name: 'Express',
        price: 60
      },
  ]
  }
  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id !== id)
    this.setState({
      books:newBooks
    })
  }

  editHandler = (name, id) => {
    let newBooks = this.state.books.map(book => {
      if (book.id === id) {
        return {
          ...book,
          name
        }
      }
      return book
    })

    this.setState({
      books: newBooks
    })

  }

  

  render() {
    return (
      <div className="App">

        <Books
          editHandler={this.editHandler.bind(this)}
          deleteHandler={this.deleteHandler.bind(this)}
          books={this.state.books} />
      </div>
        
    );
  }
}

export default App;

