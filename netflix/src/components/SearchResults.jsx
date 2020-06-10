import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class SearchResults extends React.Component{
  state = {
    movies :[]
  }
  componentDidMount = async()=>{
    let query = this.props.match.params.query
    let response = await fetch('http://www.omdbapi.com/?apikey=c0b9281d &s='+query)
    let parsedJson = await response.json()
    let movies = parsedJson.Search
    // console.log(movies)
    this.setState({movies})
    // console.log(this.state.movies)
  }

  componentDidUpdate = async(prevProps) =>{
    let query = this.props.match.params.query
    if (this.props.match.params.query!== prevProps.match.params.query) {
      let response = await fetch('http://www.omdbapi.com/?apikey=c0b9281d &s='+query)
      let parsedJson = await response.json()
      let movies = parsedJson.Search
      this.setState({movies})
     }
    }



  render(){

    return(
      <Container className='searchResults mt-2'>
        <p>Search results for '{this.props.match.params.query}'</p>
        <Row className=' row=cols-sm-2 row=cols-md-4 row-cols-lg-6 '>
          {this.state.movies.map(movie =>{
            return(
              <Col className='mt-2' key={movie.imdbID}>
                <Link to={'/ShowDetails/'+movie.imdbID}>
                  <img src={movie.Poster} alt=""/>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}
export default SearchResults