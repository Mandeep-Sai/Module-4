import React from 'react'
import {Container} from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {Link} from 'react-router-dom'

const responsive = {
  desktop:{
    breakpoint :{max:3000, min:1024},
    items : 6
  },
  mobile:{
    breakpoint :{max:1024, min:464},
    items : 3
  }
}

class Carsl extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      movies:[]
    }
  }
  componentDidMount=async()=>{
    console.log('hello')
    let name = this.props.name.toLowerCase();
    let response = await fetch('http://www.omdbapi.com/?apikey=c0b9281d &s='+name)
    let parsedJson = await response.json()
    let movies = parsedJson.Search
    this.setState({movies})
  }
  render(){
    return(
      <Container fluid className='crsl mt-3 mb-3'>
        <p className='movieName'>{this.props.name}</p>
        <Carousel
         ssr={true} // means to render carousel on server-side.
        //  infinite={true}
        //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
         autoPlaySpeed={2000}
         swipeable={false}
         draggable={false}
         showDots={true}
         responsive = {responsive}
         >
          {this.state.movies.map(movie =>{
            return(
            <div>
              <Link to={'/ShowDetails/'+movie.imdbID}>
                <img src={movie.Poster} alt=""/>
              </Link>
            </div>
            )
          })}
        </Carousel>
      </Container>
    )
  }
}
export default Carsl