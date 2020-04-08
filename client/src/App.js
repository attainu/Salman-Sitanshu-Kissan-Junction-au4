import React, { Component } from "react";

import Home from "./Component/Home/Home.js";
import NavBar from './Component/Home/NavBar';
import Profile from './Component/Farmer/Profile';
import Footer from './Component/Home/Footer';
import Content from './Component/Product/Content';
import Cart from './Component/Farmer/Cart';
import Notification from './Component/Notification/Notification';
// import Google from './Component/Google/login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import FarmerHomePage from "./Component/Farmer/mainpage";
import Login from "./Component/Supplier/login/main.js";
import CompanyRegister from "./Component/Supplier/CompanyRegister";
// import Productcategory from "./Component/Supplier/productcategory"; //product registarion based in categoty
// import ProductDisplay from "./Component/Product/ProductListDisplay";
// import MachineList from "./Component/Product/MachinaryList";
// import ProfileEdit from "./Component/Supplier/Profileedit";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Notification />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/test' component={Content} />
            <Route path='/cart' component={Cart} />
            <Route path='/login' component={Login} />
            <Route path='/company-register' component={CompanyRegister} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
export default App;
