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

import CompanyRegister from "./Component/Supplier/CompanyRegister";
import Productcategory from "./Component/Supplier/productcategory"; //product registarion based in categoty
// import ProductDisplay from "./Component/Product/ProductListDisplay";
// import MachineList from "./Component/Product/MachinaryList";
// import ProfileEdit from "./Component/Supplier/Profileedit";
import Login from "./Component/Login/login";
import Signup from "./Component/Login/siginup";
class App extends Component {
  componentDidMount = () => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:5000/user/tokenverify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token");
          } else {
            console.log(data);
          }
        });
    }
  };
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Auth(Profile)} />
            <Route path="/test" component={Content} />
            <Route path="/product-register" component={Productcategory} />
            <Route path="/cart" component={Auth(Cart)} />
            <Route path="/login" component={Login} />
            <Route path="/company-register" component={CompanyRegister} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>{" "}
      </>
    );
  }
}
export default App;
