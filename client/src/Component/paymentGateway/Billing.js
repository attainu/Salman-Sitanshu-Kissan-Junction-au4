import React, { Component } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Paypal from "./integration";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Billing extends React.Component {
  render() {
    const { cart, user } = this.props;
    console.log(user);
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
                  <div class="text-center">
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={this.onSubmit}
                    >
                      Register
                    </button>
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
                <Row></Row>
                <Row>
                  <Col>
                    <Paypal />
                  </Col>
                </Row>
              </div>
            </div>
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
