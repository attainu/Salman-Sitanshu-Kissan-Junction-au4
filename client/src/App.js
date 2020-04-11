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
// import FarmerHomePage from "./Component/Farmer/mainpage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Action from "./ActionCreater/user";
import CompanyRegister from "./Component/Supplier/CompanyRegister";
import Productcategory from "./Component/Supplier/productcategory"; //product registarion based in categoty
// import ProductDisplay from "./Component/Product/ProductListDisplay";
// import MachineList from "./Component/Product/MachinaryList";
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
    // if (token) {
    //   return fetch("http://localhost:5000/user/tokenverify", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //       if (data.message) {
    //         // An error will occur if the token is invalid.
    //         // If this happens, you may want to remove the invalid token.
    //         localStorage.removeItem("token");
    //       } else {
    //         console.log('Appp,js', data.user[0])
    //       }
    //     });
    // }
  };
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Notification />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/test" component={Content} />
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