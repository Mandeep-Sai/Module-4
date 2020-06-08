import React from 'react'

class Snippet extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log('Mounted')
  }
  componentWillUnmount(){
    console.log('Unmounted')
  }
  render(){
    return(
    <p>Snippet title is {this.props.text}</p> 
    )
  }
}
export default Snippet