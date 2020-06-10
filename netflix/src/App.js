import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SearchResults from './components/SearchResults'
import ShowDetails from './components/ShowDetails';
import RegisterForm from './components/RegisterForm'

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path='/'exact component={Home}/>
      <Route path='/searchResults/:query' component={SearchResults} />
      <Route path='/ShowDetails/:id' component={ShowDetails}/>
      <Route path ='/register' component ={RegisterForm}/>
    </Router>
  );
}

export default App;
