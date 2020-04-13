import React, { Component, useEffect } from "react";

import Home from "./Component/Home/Home.js";
import NavBar from "./Component/Home/NavBar";
import Profile from "./Component/Farmer/Profile";
import Footer from "./Component/Home/Footer";
import Content from "./Component/Product/Content";
import Cart from "./Component/Farmer/Cart";
import Notification from "./Component/Notification/Notification";
import ScrollToTop from './Component/Authentication/ScrollToTop'
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
// import Login from "./Component/Login/login";
// import Signup from "./Component/Login/siginup";
// import ForgetPasswordForm from "./Component/ForgetPassword/fogetform";
// import EmailsendMessage from "./Component/ForgetPassword/Acknolegment";

import ProfileEdit from "./Component/Supplier/Profileedit";
import Login from "./Component/FormPractice/LoginForm";
import Register from "./Component/FormPractice/RegisterForm";
import Billing from "./Component/paymentGateway/Billing";
import Thankyou from "./Component/paymentGateway/thankyou";

const { token } = Action;

class App extends Component {
  componentDidMount = () => {
    if (localStorage.token) {
      const Token = localStorage.token;
      this.props.token(Token);
    }
    window.scrollTo(0, 0);

  };

  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <Router>
          <NavBar />
          <Notification />

          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/login" component={Login} />
              <Route exact path="/farmer" component={FarmerHomePage} />
              {/* <Route path="/farmer/:lend_machine" component={MachineList} /> */}
              <Route path="/product_seed" component={ProductDisplay} />
              <Route path="/lend_machine" component={MachineList} />

              <Route path="/signup" component={Register} />
              <Auth path="/profile" component={Profile} />
              <Route path="/single-product" component={Content} />
              <Auth path="/product-register" component={Productcategory} />
              <Auth path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Auth path="/company-register" component={CompanyRegister} />
              <Auth path="/profile-edit" component={ProfileEdit} />
              <Auth path="/checkout" component={Billing} />
              <Auth path="/thankyou" component={Thankyou} />
              <Route path="*" component={NotFound} />
            </Switch>
          </ScrollToTop>
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
