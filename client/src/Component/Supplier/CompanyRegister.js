import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Css/supplierCompany.css";
import { Row, Col, Form } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
class CompanyRegister extends React.Component {
  state = {
    companyname: "",
    gstnumber: "",
    type: "",
    address: {
      adress1: "",
      city: "",
      statename: "Choose State....",
      district: "",
      pincode: "",
    },
    statelist: [
      "Choose State here....",
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttarakhand",
      "Uttar Pradesh",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Delhi",
      "Lakshadweep",
      "Puducherry",
    ],
    result: [],
    cityfetch: [],
    districtfetch: [],
  };
  //state update
  handlestate = (value) => {
    this.setState({
      cityfetch: [],
      districtfetch: [],
    });
    var url = `https://indian-cities-api-nocbegfhqg.now.sh/cities?State=${value.toString()}`;
    var citylist = fetch(url);
    citylist.then((res) => {
      res.json().then((res) => {
        this.setState({
          result: res,
        });
        var array1 = [];
        var array2 = [];
        for (var i = 0; i < res.length; i++) {
          if (res[i].State === value.toString()) {
            array1.push(res[i].City);
            array2.push(res[i].District);
          }
        }
        this.setState({
          cityfetch: array1,
          districtfetch: array2,
        });
      });
    });

    this.setState({
      address: {
        ...this.state.jasper,
        statename: value,
      },
    });
  };

  //city update
  handlecity = (value) => {
    this.setState({
      address: {
        ...this.state.jasper,
        city: value,
      },
    });
  };
  //distcict update
  handledistrict = (value) => {
    this.setState({
      address: {
        ...this.state.jasper,
        district: value,
      },
    });
  };

  render() {
    return (
      <>
        {" "}
        <div className="companyregister">
          <img
            className="mt-3"
            src="https://pngimg.com/uploads/farmer/farmer_PNG52.png"
            style={{ width: "22rem", float: "right" }}
            alt="ss"
          ></img>
          <div className="container  w-50 mt-3 mb-5 ">
            <div className=" d-flex  card shadow-lg p-3 mb-5 bg-white rounded ">
              <div className="card-body">
                <h2 className="text-center mb-3">
                  {" "}
                  Add <span style={{ color: "#28ca2f" }}>Company</span>{" "}
                </h2>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column lg="3" sm="3">
                      Company Name
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Enter Company Name"
                      />
                    </Col>
                  </Form.Group>{" "}
                  <Form.Group as={Row}>
                    <Form.Label column sm="3">
                      GST Number
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Enter GST Number"
                      />
                    </Col>
                  </Form.Group>{" "}
                  <Form.Group as={Row}>
                    <Form.Label column sm="3">
                      Company Type
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Private , Semi-Private"
                      />
                    </Col>
                  </Form.Group>{" "}
                  <div>
                    <span>
                      Add Address Detail <FaHome />
                      <hr></hr>
                    </span>
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Address
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control type="text" placeholder="1234 Main St" />
                      </Col>
                    </Form.Group>{" "}
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>City </Form.Label>
                        <Form.Control
                          as="select"
                          value={this.state.address.city}
                          onChange={(e) => this.handlecity(e.target.value)}
                        >
                          {this.state.cityfetch.map((option) => {
                            return (
                              <option
                                key={option}
                                value={option}
                                label={option}
                              >
                                {option}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          as="select"
                          value={this.state.address.state}
                          onChange={(e) => this.handlestate(e.target.value)}
                        >
                          {this.state.statelist.map((option) => {
                            return (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>District</Form.Label>
                        <Form.Control
                          as="select"
                          value={this.state.address.district}
                          onChange={(e) => this.handledistrict(e.target.value)}
                        >
                          {this.state.districtfetch.map((option) => {
                            return (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Form.Row>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-success">
                      Register
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CompanyRegister;
