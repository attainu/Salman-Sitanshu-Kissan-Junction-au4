import React from "react";
import "../../Css/supplierproduct.css";
import { Form } from "react-bootstrap";
class ProductRegister extends React.Component {
  state = {
    flag: false,
  };
  render() {
    console.log(this.props);

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
                        {this.props.seed.subject}
                      </span>{" "}
                    </h3>
                    <div class="row register-form">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={this.props.seed.type}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={this.props.seed.target}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="number"
                            class="form-control"
                            placeholder={this.props.seed.price}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={this.props.seed.size}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder={this.props.seed.dosage}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name="txtEmpPhone"
                            class="form-control"
                            placeholder={this.props.seed.description}
                          />
                        </div>
                        <div class="form-group">
                          <select class="form-control">
                            <option class="hidden" selected disabled>
                              Avaliable for Doorstep Delivery?
                            </option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <Form.File
                            id="custom-file-translate-scss"
                            label="Add Product Image"
                            lang="en"
                            custom
                          />
                        </div>
                        <input
                          type="submit"
                          class="btnRegister"
                          value="Register"
                        />
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
export default ProductRegister;
