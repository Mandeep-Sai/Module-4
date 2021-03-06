import React, { Component } from 'react'
import { Container,Spinner } from 'react-bootstrap'
import Carsl from './Carsl'

class searchResults extends Component {
  state={
    loading : true,
    query : ''
  }
  componentDidMount =async()=>{
    let query = this.props.match.params.text
    setTimeout (()=>{
      this.setState({query,loading:false})
    },1000)  
  }
  componentDidUpdate =(prevProps)=>{
    if(this.props.match.params.text !== prevProps.match.params.text){
      this.setState({loading:true})
      let query = this.props.match.params.text
      setTimeout (()=>{
        this.setState({query,loading:false})
      },1000)  
    }
  }
  render() {
    return (
      <Container fluid id='content'>
         <Container className = 'contentRows mt-5'>
          {!this.state.loading ? 
            <Carsl name ={this.state.query} for='search' />
            /* <Carsl name={this.state.queryText} /> */
           :  <Spinner animation="border"  variant="light" style={{position:"absolute",top:"50%",left:"50%"}}>
                <span className="sr-only">Loading...</span>
              </Spinner>
        }
        </Container>
      </Container>
    )
  }
}

export default searchResults
