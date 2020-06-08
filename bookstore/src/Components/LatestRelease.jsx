import React from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'


let bookCategories = ['fantasy','history','horror','romance','scifi']
let allBooks ={
  fantasy : require('../Data/fantasy.json'),
  history : require('../Data/history.json'),
  horror : require('../Data/horror.json'),
  romance : require('../Data/romance.json'),
  scifi : require('../Data/scifi.json')
}

class LatestRelease extends React.Component{
 state = {
   category : 'fantasy',
   books : allBooks.fantasy.slice(0,12)
 }
 componentDidMount = async() =>{
  let response = await fetch(' https://striveschool.herokuapp.com/api/comments/',{
    method :'GET',
    headers : new Headers({
      'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
      // 'Content-type': "application/json"
    })
  })
  let comments = await response.json()
  console.log(comments)
 }
 render(){
   return(
     <Container>
       <Row >
        {this.state.books.map(book =>{
          return(
            <Col xs={3} key={book.asin}>
              <Card className='mt-3' >
                <Card.Img variant="top" src={book.img} style={{ height: '15rem' }}/>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <p>Price :{book.price} $</p>
                  </Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      
     </Container>
   )
 }
}

export default LatestRelease

