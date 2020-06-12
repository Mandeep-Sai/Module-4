import React, { Component } from 'react'
import {Badge,Button,Modal,Form,Row,Col} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

export class Comments extends Component {
  constructor(props){
    super(props)
    this.state ={
      comments : [],
      show : false,
      review :{
        comment :'',
        rate : '1',
        elementId : this.props.id
      }
    }
  }
  componentDidMount=async() =>{
    let id = this.props.id
    const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
    let response = await fetch(commentsUrl + id,{
      method:'GET',
      headers : new Headers({
        'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU='
      })
    })
    let comments = await response.json()
    console.log(comments)
    this.setState({comments})
  }
  handleShow =()=>{
    this.setState({show : true})
  }
  handleHide =()=>{
    this.setState({show : false})
  }

  updateReview =(e)=>{
    let review = this.state.review
    let id = e.currentTarget.id
    if(id === 'rate'){
      review[id] = parseInt(e.currentTarget.value)
    } else{
      review[id] = e.currentTarget.value
    }
    this.setState({review})
    console.log(this.state.review)

  }
  sendReview = async()=>{
    let id = this.props.id
    const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
    let response = await fetch(commentsUrl,{
      method:'POST',
      body : JSON.stringify(this.state.review),
      headers : new Headers({
        'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
        'content-type': 'application/json'
      })
    })
    if(response.ok){
      alert('Review submitted')
      this.props.history.push('/')
    }
  }
  render() {
    return (
    <>
      <div className='reviews'>
        <h6 className='mt-2 mb-0'>Reviews</h6>
        {(this.state.comments.length !== 0) ? (
          this.state.comments.map(comment =>(           
              <p>{comment.comment} <Badge variant="info">{comment.rate}</Badge></p>       
          ))
        ) : <p>No reviews yet!!!</p>
  }
         <Button className='submitReviewBtn mt-2'onClick={this.handleShow} >Submit Review</Button>
      </div>

      <Modal
        show = {this.state.show}
        onHide ={this.handleHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Submit Your Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Review
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" id='comment' onChange={this.updateReview} placeholder="Write your Review" required/>
              <Form.Control.Feedback type="invalid">
              Review cannot be empty
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}  for="rate">Rating</Form.Label>
            <Col sm={4}>
              <Form.Control as="select" id='rate' onChange={this.updateReview}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Col>
          </Form.Group>
 
          
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.sendReview}>Send</Button>
        </Modal.Footer>
      </Modal>
    </>
    )
  }
}

export default withRouter(Comments)


