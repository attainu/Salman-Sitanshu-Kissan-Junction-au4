import React from "react";
import "../../Css/profile.css";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Action from "../../ActionCreater/notification";

const { notify } = Action;

class Profile extends React.Component {
  state = {
    productCount: 1,
  };

  increaseProduct = () => {
    this.setState({
      productCount: this.state.productCount + 1,
    });
  };
  render() {
    const { notify, Authenticated, cart } = this.props;
    var flag = false;
    if (cart.length > 0) flag = true;
    return (
      <>
        {flag && (
          <div class="d-flex flex-wrap justify-content-between flex-row m-5 cart-box">
            <h1 className=" d-inline flex-fill m-3 mb-2">Shopping Cart</h1>
            <div className="mx-auto m-3 mb-5">
              <Button
                className="ml-auto"
                variant="success"
                size="lg"
                onClick={() =>
                  notify({
                    type: "success",
                    msg: "Order Placed Successfully",
                  })
                }
              >
                Place Order
              </Button>
            </div>

            <Table borderless responsive>
              <tbody className="text-center">
                {cart &&
                  cart.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td scope="row">
                            <img
                              className="m-0 rounded-circle p-0 "
                              width="100px"
                              src={item.imageurl}
                              alt="user pic"
                            />
                          </td>
                          <td>
                            <h4 className="m-0 p-0">{item.productName}</h4>
                            <br />
                            Seller Amitabh Kumar
                          </td>
                          <td className="cart-btn">
                            <Button
                              variant="secondary"
                              onClick={() =>
                                notify({ type: "warn", msg: "Removed 1" })
                              }
                            >
                              -
                            </Button>
                            <span className="mr-3 ml-3">
                              {this.state.productCount}
                            </span>
                            <Button
                              variant="secondary"
                              onClick={
                                (() => notify({ type: "warn", msg: "Added 1" }),
                                this.increaseProduct)
                              }
                            >
                              +
                            </Button>
                          </td>
                          <td>
                            <h4>
                              <sup>₹</sup>
                              {item.price}
                            </h4>
                          </td>
                          <td>
                            <i
                              class="fa fa-trash fa-2x text-danger"
                              onClick={() =>
                                notify({
                                  type: "error",
                                  msg: "Item Removed",
                                  item: item,
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
  const cart = state.productList.cart;
  const { Authenticated } = state.user;
  return {
    Authenticated,
    cart,
  };
};

const change = (dispatch) => {
  return bindActionCreators({ notify }, dispatch);
};

export default connect(take, change)(Profile);
