
import React, { Component } from 'react';
import './App.css';
import Home from "./Component/Home/Home.js";
import NavBar from './Component/Home/NavBar';
import Profile from './Component/Farmer/Profile';
import Footer from './Component/Home/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
export default App;
