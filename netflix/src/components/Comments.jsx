import React, { Component } from 'react'
import {Badge} from 'react-bootstrap'

export class Comments extends Component {
  constructor(props){
    super(props)
    this.state ={
      comments : []
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
  render() {
    return (
      <div className='reviews'>
        <h6 className='mt-2 mb-0'>Reviews</h6>
        {this.state.comments.map(comment =>{
          return(
            <>
            <p>{comment.comment} <Badge variant="info">{comment.rate}</Badge></p>
            </>
          )
        })}
      </div>
    )
  }
}

export default Comments
