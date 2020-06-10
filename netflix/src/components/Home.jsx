import React, { Component } from 'react'
import Carousel from './Carousel'

export class Home extends Component {
  render() {

    return (
      <div >
        <Carousel name='Avengers'/>
        <Carousel name='harry'/>
      </div>
    )
  }
}

export default Home
