import React from "react";
import "../../Css/supplierproduct.css";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import Action from "../../ActionCreater/user";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
const { productregister } = Action;

class ProductRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      productType: "",
      productName: "",
      price: "",
      productSize: "",
      productDosage: "",
      targetplant: "",
      description: "",
      todashboardredirect: false,
    };
    this.handleChange = this.handleChange.bind();
    this.onSubmit = this.onSubmit.bind();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    let {
      productType,
      productName,
      price,
      productSize,
      productDosage,
      targetplant,
      description,
    } = this.state;
    this.props.productregister({
      productType,
      productName,
      price,
      productSize,
      productDosage,
      targetplant,
      description,
    });
    axios({
      method: "post",
      url: "http://localhost:5000/product/",
      data: {
        productType: productType,
        productName: productName,
        price: price,
        productSize: productSize,
        productDosage: productDosage,
        targetplant: targetplant,
        description: description,
      },
    }).then(function (response) {
      console.log(response);
    });

    setTimeout(() => {
      this.setState(() => ({ todashboardredirect: true }));
    }, 1000);
  };

  render() {
    if (this.state.todashboardredirect) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <div>
          <div class="container register mb-3">
            <div class="row">
              <div class="col-md-3 register-left">
                <h4 className="mt-5">
                  Now add your product in some of simple steps
                </h4>

                <br />
              </div>
              <div class="col-md-9 register-right">
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h3 class="register-heading">
                      Add{" "}
                      <span style={{ color: "#28ca2f" }}>
                        {this.props.product.subject}
                      </span>{" "}
                    </h3>
                    <div class="row register-form">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={this.props.product.type}
                            name="productType"
                            value={this.state.productType}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Product Name"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            placeholder={this.props.product.price}
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={this.props.product.size}
                            name="productSize"
                            value={this.state.productSize}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={this.props.product.dosage}
                            name="productDosage"
                            value={this.state.productDosage}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name="txtEmpPhone"
                            class="form-control"
                            placeholder={this.props.product.description}
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={this.props.product.target}
                            name="targetplant"
                            value={this.state.targetplant}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <Form.File
                            id="custom-file-translate-scss"
                            label="Add Product Image"
                            lang="en"
                            custom
                          />
                        </div>
                        <Button
                          variant="outline-success align-center"
                          onClick={this.onSubmit}
                        >
                          {" "}
                          Add Product
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const take = (state) => {
  return state;
};

const change = (dispatch) => {
  return bindActionCreators({ productregister }, dispatch);
};

export default connect(take, change)(ProductRegister);
