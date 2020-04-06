import React, { Component } from "react";
import "./App.css";
import Home from "./Component/Home/Home.js";
import NavBar from "./Component/Home/NavBar";
import FarmerHomePage from "./Component/Farmer/mainpage";
import SupplierLogin from "./Component/Supplier/login/main.js";
import CompanyRegister from "./Component/Supplier/CompanyRegister";
import Productcategory from "./Component/Supplier/productcategory";
import ProductDisplay from "./Component/Product/ProductListDisplay";
import MachineList from "./Component/Product/MachinaryList";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <CompanyRegister />
      </>
    );
  }
}
export default App;
