import React from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {fantasy,history,horror,romance,scifi} from '../Data';



class LatestRelease extends React.Component{
  render(){
    const all = [fantasy,history,horror,romance,scifi]
    for(let i=0;i<all.length;i++){
      return(

        <Container>
          <Row className=" row-cols-2 row-cols-md-4">
              {all[i].map((book)=>{
                return(
                  <Col  key={book.asin}>
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
}

export default LatestRelease

{/* <Container className="latestBooks">
          <Row className=" row-cols-2 row-cols-md-4">
              {books.map((book)=>{
                return(
                  <Col  key={book.asin}>
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
        </Container> */}