import React from 'react';
import {} from 'react-bootstrap';
import BookList from './BookList';


let categories = ["fantasy", "horror", "history", "romance", "scifi"];
let books ={
  fantasy : require('../data/fantasy.json'),
  horror : require('../data/horror.json'),
  history : require('../data/history.json'),
  romance : require('../data/romance.json'),
  scifi : require('../data/scifi.json')
}

class BooksContainer extends React.Component{
  state ={
    category : 'fantasy',
    books : books.category
  }
  render(){
    this.setState({books:books[category]})
    return(
      <BookList list={books}/>
    )
  }
}
export default BooksContainer