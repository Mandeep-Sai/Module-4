import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Reservations from './components/Reservations'
import DishDetail from './components/DishDetail'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar title="Strivestaurant" />
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/reservation" exact component={Reservations} />
          <Route path="/details/:id" component={DishDetail} />
        </Router>
      </>
    );
  }
}

export default App;