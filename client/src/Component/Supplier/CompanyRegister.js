import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Action from "../../ActionCreater/user";
import { Redirect } from "react-router";
import axios from "axios";
const { companyRegister } = Action;

class CompanyRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      companyname: "",
      gstnumber: "",
      type: "",
      adress1: "",
      city: "",
      statename: "Choose State....",
      district: "",
      pincode: "",
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
      todashboardredirect: false,
    };
    this.handleChange = this.handleChange.bind();
    this.onSubmit = this.onSubmit.bind();
    this.handlestate = this.handlestate.bind();
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
      companyname,
      type,
      gstnumber,
      adress1,
      statename,
      city,
      district,
      pincode,
    } = this.state;
    this.props.companyRegister({
      companyname,
      type,
      gstnumber,
      adress1,
      statename,
      city,
      district,
      pincode,
    });
    axios({
      method: "post",
      url: "http://localhost:5000/company/add",
      data: {
        GST_number: gstnumber,
        company_name: companyname,
        company_type: type,
        company_address: adress1,
        company_city: city,
        company_district: district,
        company_state: statename,
        company_pincode: pincode,
      },
    }).then(function (response) {
      console.log(response);
    });

    setTimeout(() => {
      this.setState(() => ({ todashboardredirect: true }));
    }, 1000);
  };

  //state update
  handlestate = (e) => {
    const value = e.target.value;
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
          city: array1[0],
          district: array2[0],
        });
      });
    });

    this.handleChange(e);
  };

  render() {
    if (this.state.todashboardredirect) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <img
                className="mt-3"
                src="https://pngimg.com/uploads/farmer/farmer_PNG52.png"
                style={{ width: "22rem", float: "right" }}
                alt="ss"
              ></img>
            </Col>
            <Col lg={9} md={9} sm={12} className="mt-3 mb-3">
              <div className="    shadow-lg  ">
                <div className="card-body">
                  <h2 className="text-center mb-3">
                    Add <span style={{ color: "#28ca2f" }}>Company</span>
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
                          name="companyname"
                          value={this.state.companyname}
                          onChange={this.handleChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        GST Number
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control
                          type="text"
                          placeholder="Enter GST Number"
                          name="gstnumber"
                          value={this.state.gstnumber}
                          onChange={this.handleChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Company Type
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control
                          type="text"
                          placeholder="Private , Semi-Private"
                          name="type"
                          value={this.state.type}
                          onChange={this.handleChange}
                        />
                      </Col>
                    </Form.Group>
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
                          <Form.Control
                            type="text"
                            placeholder="1234 Main St"
                            name="adress1"
                            value={this.state.adress1}
                            onChange={this.handleChange}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>City </Form.Label>
                          <Form.Control
                            as="select"
                            name="city"
                            value={this.state.city}
                            onChange={this.handleChange}
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
                            name="statename"
                            value={this.state.state}
                            onChange={this.handlestate}
                          >
                            {this.state.statelist.map((option) => {
                              if (option === "Choose State here....")
                                return (
                                  <option
                                    className="dropdown-item disabled"
                                    key={option}
                                    value={option}
                                  >
                                    {option}
                                  </option>
                                );
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
                            name="district"
                            value={this.state.district}
                            onChange={this.handleChange}
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
                          <Form.Control
                            type="number"
                            placeholder="400008"
                            name="pincode"
                            value={this.state.pincode}
                            onChange={this.handleChange}
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
          </Row>
        </Container>
      </>
    );
  }
}

const take = (state) => {
  return state;
};

const change = (dispatch) => {
  return bindActionCreators({ companyRegister }, dispatch);
};

export default connect(take, change)(CompanyRegister);
