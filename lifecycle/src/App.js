import React from 'react';
import './App.css';
import Snippet from './Snippet'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      test: '',
      show : true
    }
  }
  componentDidMount = () =>{
    console.log('Runs one time initially')
  }
  changeState =() =>{
    this.setState({
      show: !this.state.show
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        {console.log('hello')}
          <button type='button' onClick={this.changeState}>PRESS ME</button>
          {this.state.show && <Snippet text='Hello' /> }
      </header>
    </div>
  );
  }
}

export default App;
