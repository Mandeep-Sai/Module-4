import React from 'react';
import {Container,Row, Col ,Carousel} from 'react-bootstrap';
import items from '../Data/menu.json';

//  Class
class Home extends React.Component{
  render(){
    return (
        <Container>
          <Row className="justify-content-center mt-3">
            <Col>
              <h1> Welcome</h1>
              <div>
              <Carousel>
                  {items.map(item =>{
                    return(
                      <Carousel.Item key = {item.id}>
                        <img 
                          className="d-block w-100"
                          src={item.image}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )
                  })}                 
              </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
    )
  }
}

// Function

// const Home = (props) =>{
//   return (
//     <>
//       <div className='col'></div>
//     </>
//   )
// }
export default Home