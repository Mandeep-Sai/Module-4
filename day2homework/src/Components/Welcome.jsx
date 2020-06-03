import React from 'react';
import {Button, Jumbotron} from 'react-bootstrap'


class Welcome extends React.Component{
  render(){
    return(
      <>
        <Jumbotron className="jumbotron">
          <h1>Welcome to the world of Books</h1>
          <p>
          We offer tremendous gathering of books in various classification of Fiction, Non-fiction, 
          Biographies, History, Religions, Self – Help, Children. We likewise move in immense 
          accumulation of Investments and Management, Computers, Engineering, Medical, College 
          and School content references books proposed by various foundations as schedule the nation over.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </>
    )
  }
}

export default Welcome
