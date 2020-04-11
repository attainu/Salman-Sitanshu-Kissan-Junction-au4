import React, { Component } from "react";

import Home from "./Component/Home/Home.js";
import NavBar from "./Component/Home/NavBar";
import Profile from "./Component/Farmer/Profile";
import Footer from "./Component/Home/Footer";
import Content from "./Component/Product/Content";
import Cart from "./Component/Farmer/Cart";
import Notification from "./Component/Notification/Notification";
// import Google from './Component/Google/login';
import Auth from "./Component/Authentication/RouteProtecting";
import NotFound from "./Component/Authentication/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FarmerHomePage from "./Component/Farmer/mainpage";

// import FarmerHomePage from "./Component/Farmer/mainpage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Action from "./ActionCreater/user";

import CompanyRegister from "./Component/Supplier/CompanyRegister";
import Productcategory from "./Component/Supplier/productcategory"; //product registarion based in categoty
import ProductDisplay from "./Component/Product/ProductListDisplay";
import MachineList from "./Component/Product/MachinaryList";
// import ProfileEdit from "./Component/Supplier/Profileedit";
import Login from "./Component/Login/login";
import Signup from "./Component/Login/siginup";
import ProfileEdit from "./Component/Supplier/Profileedit";

const { token } = Action;

class App extends Component {
  componentDidMount = () => {
    if (localStorage.token) {
      const Token = localStorage.token;
      this.props.token(Token);
    }
  };

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Notification />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/login" component={Login} />
            <Route exact path="/farmer" component={FarmerHomePage} />
            <Route path="/farmer/:lend_machine" component={MachineList} />
            <Route path="/product_seed" component={ProductDisplay} />
            <Route path="/lend_machine" component={MachineList} />

            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/single-product" component={Content} />
            <Route path="/product-register" component={Productcategory} />
            <Auth path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/company-register" component={CompanyRegister} />
            <Route path="/profile-edit" component={ProfileEdit} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
const take = (state) => {
  return state;
};

const change = (dispatch) => {
  return bindActionCreators({ token }, dispatch);
};

export default connect(take, change)(App);
