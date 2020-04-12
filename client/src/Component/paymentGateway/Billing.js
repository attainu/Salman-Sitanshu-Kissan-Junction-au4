import React, { Component } from "react";
import { Row, Col, Button, Form, Table } from "react-bootstrap";
import Paypal from "./integration";
import { connect } from "react-redux";
import GPayButton from "react-google-pay-button";
import { Link } from "react-router-dom";
class Billing extends React.Component {
  state = {
    totalPrice: 0,
  };
  componentDidMount = () => {
    var total = 0;
    for (var i = 0; i < this.props.cart.length; i++)
      total += parseInt(this.props.cart[i].price);
    this.setState({
      totalPrice: total,
    });
  };

  render() {
    const { cart, user } = this.props;
    let paypal, googlepay;
    if (this.state.totalPrice > 0) {
      paypal = <Paypal price={this.state.totalPrice} />;
      googlepay = (
        <GPayButton
          totalPriceStatus={"FINAL"}
          totalPrice={"1100"}
          currencyCode={"INR"}
          countryCode={"IN"}
          development={true}
        />
      );
    }
    return (
      <div>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="shadow-lg w-75 ml-5 mt-3 mb-3">
              <div className="card-body">
                <h4 className="text-center mb-3">
                  <span style={{ color: "#28ca2f" }}>
                    {" "}
                    Add Personal Details
                  </span>
                </h4>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column lg="4" sm="3">
                      Name
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        type="text"
                        placeholder={user.name}
                        name="name"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column lg="4" sm="3">
                      GST Number
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        type="email"
                        placeholder={user.email}
                        name="Email"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column lg="4" sm="3">
                      Mobile Here
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        type="number"
                        placeholder={user.mobile}
                        name="company_type"
                      />
                    </Col>
                  </Form.Group>
                  <div>
                    <span>
                      Address Detail
                      <hr></hr>
                    </span>
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Address
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control
                          type="text"
                          placeholder="Enter Home ,Street"
                          name="address"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          name="city"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>District </Form.Label>
                        <Form.Control
                          type="text"
                          name="company_city"
                        ></Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          name="company_city"
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="400008"
                          name="company_pincode"
                        />
                      </Form.Group>
                    </Form.Row>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="shadow-lg w-75   mt-3 mb-3">
              <div className="card-body">
                <h4 className="text-center mb-3">
                  <span style={{ color: "#28ca2f" }}> Item Added</span>
                </h4>
                <Row>
                  <Table
                    striped
                    borderless
                    responsive
                    hover
                    size="sm"
                    className="text-center"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>

                    <tbody className="text-center">
                      {cart &&
                        cart.map((item, index) => {
                          return (
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{item.productName}</td>
                                <td>₹ {item.price}</td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </Table>
                  <h4 className="text-center mb-3">
                    <span style={{ color: "#28ca2f" }}>
                      Total Price- {this.state.totalPrice}
                    </span>
                  </h4>
                </Row>
                <Row>
                  <Col>{paypal}</Col>
                  <Col>{googlepay} </Col>
                </Row>
              </div>
            </div>
            <Link to="/thankyou">
              {" "}
              <Button variant="outline-success">Complete Order</Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.productList.cart,
    user: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
