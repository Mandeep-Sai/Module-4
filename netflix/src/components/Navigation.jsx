import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'

export class Navigation extends Component {

  searchQuery =(e) =>{
    let query = e.currentTarget.previousSibling.value;
    this.props.history.push("/searchResults/" +query)
    console.log(query)
  }
  register=()=>{
    this.props.history.push("/register")
  }
  render() {
    return (
      <div>
        <Navbar >
          <Navbar.Brand href="#home">
            <img
            src='assets/logo.png'
            alt="logo"
            style={{ width: "100px", height: "45px" }}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info" className='searchBtn' onClick={this.searchQuery} ><FaSearch/></Button>
          </Form>
          <Button variant="outline" className='registerBtn' onClick={this.register} >Register</Button>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(Navigation)
