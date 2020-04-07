import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
class ProfileEdit extends React.Component {
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
        <Container>
          <Row>
            <Col lg={2} md={2} sm={12}></Col>
            <Col lg={8} md={8} sm={12} className="mt-3 mb-3">
              <div className="    shadow-lg  ">
                <div className="card-body">
                  <h2 className="text-center mb-3">
                    {" "}
                    Edit <span style={{ color: "#28ca2f" }}>Profile</span>{" "}
                  </h2>

                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column lg="3" sm="3">
                        Name
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control
                          type="text"
                          placeholder="Edit Name Here"
                        />
                      </Col>
                    </Form.Group>{" "}
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Email
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control type="email" placeholder="Edit Email" />
                      </Col>
                    </Form.Group>{" "}
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Contact Number
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control
                          type="number"
                          placeholder="Edit Contact Number"
                        />
                      </Col>
                    </Form.Group>{" "}
                    <Form.Group as={Row}>
                      <Form.Label column sm="3">
                        Password
                      </Form.Label>
                      <Col sm="9">
                        <Form.Control
                          type="password"
                          placeholder="Edit Password"
                        />
                      </Col>
                    </Form.Group>{" "}
                    <div>
                      <span>
                        Edit Address Detail <FaHome />
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
                          />
                        </Col>
                      </Form.Group>{" "}
                      <Form.Row>
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
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>District</Form.Label>
                          <Form.Control
                            as="select"
                            value={this.state.address.district}
                            onChange={(e) =>
                              this.handledistrict(e.target.value)
                            }
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
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                          <div class="text-center">
                            <Button
                              className="btn btn-warning"
                              style={{ backgroundColor: "orange" }}
                            >
                              Cancel
                            </Button>
                          </div>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <div class="text-center">
                            <Button className="btn btn-success">
                              Edit Now
                            </Button>
                          </div>
                        </Form.Group>
                      </Form.Row>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={2} md={2} sm={12}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProfileEdit;
