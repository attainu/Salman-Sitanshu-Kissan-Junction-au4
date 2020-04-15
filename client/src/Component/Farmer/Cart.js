import React from "react";
import "../../Css/profile.css";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Action from "../../ActionCreater/notification";
import { Link } from "react-router-dom";
import User from "../../ActionCreater/user";

const { notify } = Action;
const { join, addCart, minusCount } = User;

class Profile extends React.Component {

  componentDidMount() {
    this.props.join(this.props.id);
  }

  // increaseProduct = () => {
  //   this.setState({
  //     productCount: this.state.productCount + 1,
  //   });
  // };
  render() {
    const { notify, Authenticated, products } = this.props;
    let flag = false
    products.forEach((item) => { if (item.connectType === "booked" && (item.status === false && item.cart > 0)) flag = true })
    console.log(flag)
    return (
      <>
        {flag && (
          <div class="d-flex flex-wrap justify-content-between flex-row m-5 cart-box">
            <h1 className=" d-inline flex-fill m-3 mb-2">Shopping Cart</h1>
            <div className="mx-auto m-3 mb-5">
              <Link to="/checkout">
                {" "}
                <Button
                  className="ml-auto"
                  variant="success"
                  size="lg"
                  onClick={() =>
                    notify({
                      type: "success",
                      msg: "About to Place Order",
                    })
                  }
                >
                  Checkout
                </Button>
              </Link>
            </div>

            <Table borderless responsive>
              <tbody className="text-center">
                {products.map((item, index) => {
                  if (item.connectType === "booked" && (item.status === false && item.cart > 0)) {
                    let product = item.product
                    return (
                      <>
                        <tr key={index}>
                          <td scope="row">
                            <img
                              className="m-0 rounded-circle p-0 "
                              width="100px"
                              src={product.imageurl}
                              alt="user pic"
                            />
                          </td>
                          <td>
                            <h4 className="m-0 p-0">{product.productName}</h4>
                            <br />
                            Seller Amitabh Kumar
                          </td>
                          <td className="cart-btn">
                            {/* <Button
                              variant="secondary"
                              onClick={this.countMinus}
                            >
                              -
                            </Button> */}
                            <span className="mr-3 ml-3">
                              {item.cart} Quantity
                            </span>
                            {/* <Button
                              variant="secondary"
                              onClick={this.addToCart}
                            >
                              +
                            </Button> */}
                          </td>
                          <td>
                            <h4>
                              <sup>₹</sup>
                              {parseInt(product.price) * item.cart}
                            </h4>
                          </td>
                          <td>
                            <i
                              class="fa fa-trash fa-2x text-danger"
                              onClick={() =>
                                notify({
                                  type: "error",
                                  msg: "Item Removed",
                                  item: product,
                                })
                              }
                            ></i>
                          </td>
                        </tr>
                        <td colSpan="5">
                          <hr />
                        </td>
                      </>
                    );
                  }
                })}
              </tbody>
            </Table>
          </div>
        )}

        {!flag && (
          <div className="mt-5 d-flex justify-content-center">
            <h1>
              <span style={{ color: "#28ca2f" }}>Ooops!!! </span> Your Cart is
              Empty.
            </h1>
            <img src="https://candleroses.com/images/Cart-empty.gif"></img>
          </div>
        )}
      </>
    );
  }
}

const take = (state) => {
  // const cart = state.productList.cart;
  const { Authenticated } = state.user;
  const { connect_products } = state.user.currentUser
  let products = [];
  if (connect_products) {
    products = connect_products
  }
  return {
    Authenticated,
    products,
    id: state.user.currentUser.id
    // cart,
  };
};

const change = (dispatch) => {
  return bindActionCreators({ notify, join, addCart, minusCount }, dispatch);
};

export default connect(take, change)(Profile);
