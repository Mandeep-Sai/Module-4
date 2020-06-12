import React, { Component } from 'react'
import Carousel from './Carousel'
import Carsl from './Carsl'

export class Home extends Component {
  render() {

    return (
      <div >
        <Carsl name='Avengers'/>
        <Carsl name='Harry Potter'/>
        <Carsl name ='Matrix'/>
      </div>
    )
  }
}

export default Home
