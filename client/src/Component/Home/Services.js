import React, { Component } from "react";
import {
  Carousel,
  Button,
  Row,
  Col,
  Container,
  Card,
  Jumbotron
} from "react-bootstrap";
import "./../../Css/homepage1.css";
import image1 from '../../Image/service1.jpg';
import image2 from '../../Image/service2.jpg';
import image3 from '../../Image/service3.jpg';
import image4 from '../../Image/service4.png';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    var linkStyle;

    if (this.state.hover) {
      linkStyle = {
        backgroundColor: "#262626",
        width: "18rem",
        height: "12rem"
      };
    } else {
      linkStyle = {
        backgroundColor: "#262626",
        width: "18rem",
        height: "12rem"
      };
    }
    return (
      <div>
        <Row>
          <Jumbotron className="Blog text-center">
            <h1>
              <span style={{ color: "#28ca2f" }}>Our</span> Services
            </h1>
            <Row
              style={{
                marginLeft: "6rem",
                marginTop: "2rem"
              }}
            >
              <Col className="servicemerge">
                <Row>
                  <img
                    src={image1}
                    alt="dd"
                    style={{
                      width: "18rem",
                      height: "12rem"
                    }}
                  />
                </Row>

                <Row
                  style={linkStyle}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                >
                  <h4 style={{ color: "#28ca2f", margin: "0 auto" }}>
                    Gardening Kits
                  </h4>
                  <p style={{ color: "white" }}>
                    We provides all of the gardening related products i.e seeds,
                    pestisides and heavy machine.
                  </p>
                </Row>
              </Col>

              <Col className="servicemerge">
                <Row
                  style={linkStyle}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                >
                  <h4 style={{ color: "#28ca2f", margin: "0 auto" }}>
                    Heavy Machine
                  </h4>
                  <p style={{ color: "white" }}>
                    No need to worry of labour costing more. Just rent all types
                    of machine here!!
                  </p>
                </Row>
                <Row>
                  <img
                    src={image2}
                    alt="dd"
                    style={{ width: "18rem", height: "12rem" }}
                  />
                </Row>
              </Col>
              <Col className="servicemerge">
                <Row>
                  <img
                    src={image3}
                    alt="dd"
                    style={{ width: "18rem", height: "12rem" }}
                  />
                </Row>
                <Row
                  style={linkStyle}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                >
                  <h4 style={{ color: "#28ca2f", margin: "0 auto" }}>
                    Supplier
                  </h4>
                  <p style={{ color: "white" }}>
                    Now you produce. And we are here to sell your product. Just
                    list your sell, and get proper pay for it.
                  </p>
                </Row>
              </Col>
              <Col>
                <Row
                  style={linkStyle}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                >
                  <h4 style={{ color: "#28ca2f", margin: "0 auto" }}>
                    Consumer
                  </h4>
                  <p style={{ color: "white" }}>
                    Why to visit Super Store and Pay High? Order all products
                    and get deliver at your doorstep.
                  </p>
                </Row>
                <Row>
                  <img
                    src={image4}
                    alt="dd"
                    style={{ width: "18rem", height: "12rem" }}
                  />
                </Row>
              </Col>
            </Row>
          </Jumbotron>
        </Row>
      </div>
    );
  }
}

export default Service;
