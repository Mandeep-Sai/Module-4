import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SearchResults from './components/SearchResults'
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path='/searchResults/:query' component={SearchResults} />
      <Route path='/ShowDetails/:id' component={ShowDetails}/>
    </Router>
  );
}

export default App;
