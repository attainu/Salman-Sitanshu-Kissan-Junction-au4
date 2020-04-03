import React, { Component } from "react";
import "./App.css";
import Home from "./Component/Home/Home.js";
import NavBar from "./Component/Home/NavBar";
import SupplierLogin from "./Component/Supplier/login/main.js";
class App extends Component {
  render() {
    return (
      <>
        <SupplierLogin />
      </>
    );
  }
}
export default App;
