import React from "react"
import { Container, Row, Col, Card, Badge, Image } from 'react-bootstrap'
import dishes from '../data/menu.json'
import DishComments from './DishComments'

class DishDetail extends React.Component {
    state = {
        dish: null,
        loading: true
    }
    changeState=(dish)=>{
        this.setState({dish,loading:false})
    }
    componentDidMount = () => {
        const dishId = this.props.match.params.id;
        console.log('DISHID IS --> ', dishId)
        const dish = dishes.find(dish => dishId === dish.id.toString())
        console.log('DISH --> ', dish)
        setTimeout(this.changeState(dish),5000)

    }

    render() {
        console.log('DISHDETAIL PROPS --> ', this.props)
        return (
            <Container>
                {this.state.loading ? <h1>LOADING...</h1> : null}
                {this.state.dish ? (
                    <>
                        <Row>
                            <Col>
                                <Row className="mt-4 mb-2">
                                    <Col md={3}>
                                        <Image src={this.state.dish.image} className="img-fluid" alt="dish" />
                                    </Col>
                                    <Col md={9}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{this.state.dish.name}</Card.Title>
                                                <Card.Subtitle><Badge variant="danger">{this.state.dish.label}</Badge></Card.Subtitle>
                                                <Card.Text>{this.state.dish.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <DishComments selectedDish={this.state.dish} />
                    </>
                ):  <h1>NO DISH FOUND</h1>
            }
                
            </Container>
        )
    }
}

export default DishDetail