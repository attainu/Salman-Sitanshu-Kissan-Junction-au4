import React, { Component } from "react";
import "./App.css";
import Home from "./Component/Home/Home.js";
import NavBar from "./Component/Home/NavBar";
import FarmerHomePage from "./Component/Farmer/mainpage";
import SupplierLogin from "./Component/Supplier/login/main.js";
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SupplierLogin />
      </>
    );
  }
}
export default App;
