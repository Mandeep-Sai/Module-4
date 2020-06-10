import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import "../css/glide.core.min.css";
import "../css/glide.theme.min.css";
import Glide from '@glidejs/glide'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'


class Carousel extends Component {
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
    new Glide('.glide ',{
      type:'carousel',
      perView:6,
      // gap: -90,
      autoplay: 2000,
      breakpoints:{
        1200:{
          perView :3
        },
        991:{
          gap:10,
          perView :2
        }
      }
      
    }).mount()
  }
  render() {
    return (
        <Container fluid className='mt-2'>
            
            <div className={'glide '+this.props.id}>
              <p className='movieName'>{this.props.name}</p>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {this.state.movies.map(movie =>{
                    return(
                      <li className="glide__slide">
                        <img src={movie.Poster} alt=""/>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><FaAngleLeft/></button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><FaAngleRight/></button>
              </div>
            </div>
        </Container>
    )
}
}

export default Carousel
