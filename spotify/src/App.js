import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SideBar from './components/SideBar'
import Player from './components/Player'
import Home from './components/Home'
import Artist from './components/Artist'


function App() {
  return (
    <Router>
      <SideBar/>
      <Route path='/' exact component={Home}/>
      <Route path='/artists/:id' component={Artist}/>
      <Player/>
    </Router>
  );
}

export default App;
