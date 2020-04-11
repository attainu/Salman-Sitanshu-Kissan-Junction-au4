import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../Css/productlist.css";
import Slider from "./CategorySlider";
import MyComponent from "./PriceRangeFilter";
import TargetCrop from "./TargetCropFilter";
class ProductDisplay extends React.Component {
  state = {
    seedPestiside: [
     
    ],
  };

   componentDidMount = () => {
    var waiter = fetch("http://localhost:5000/product/");
    waiter.then((res) => {
      res.json().then((data) => {
       this.setState({seedPestiside:data})
      });
      console.log(this.state.seedPestiside)
    });
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          <Row>
            <Col lg={3} md={3} sm={12} className="border-right">
              <Row>
                <Col lg={12} md={12} sm={12} className="mt-3">
                  <h3>
                    <span style={{ color: "#28ca2f" }}>Apply</span> Filter Here
                    <hr></hr>
                  </h3>
                  <Slider />
                </Col>
              </Row>
              <MyComponent />
              <TargetCrop />
            </Col>
            <Col lg={9} md={9} sm={12}>
              <Row>
                {this.state.seedPestiside &&
                  this.state.seedPestiside.map((item, index) => {
                    return (
                      <Col lg={4} md={4} sm={12}>
                        <div className="card mt-3">
                          <img
                            src={item.url}
                            alt="Denim Jeans"
                            style={{ width: "18.rem", height: "15rem" }}
                          ></img>
                          <h3>{item.name}</h3>
                          <p className="price mb-0">
                            {" "}
                            Price-{" "}
                            <span style={{ color: "#28ca2f" }}>
                              {" "}
                              ₹ {item.price}
                            </span>{" "}
                          </p>
                          <p className="price mb-0">
                            {" "}
                            Target Plants-{" "}
                            <span style={{ color: "#28ca2f" }}>
                              {" "}
                              {item.targrt_plant}
                            </span>{" "}
                          </p>

                          <p>
                            <button>Preview Here</button>
                          </p>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ProductDisplay;
