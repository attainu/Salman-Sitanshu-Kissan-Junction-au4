
import React, { Component } from 'react';
import './App.css';
import Home from "./Component/Home/Home.js";
import NavBar from './Component/Home/NavBar';

class App extends Component {

  render() {
    return (
      <>
        <NavBar />
        <Home />
      </>
    )
  }
}
export default App;
