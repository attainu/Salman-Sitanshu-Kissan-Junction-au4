import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../Css/productlist.css";
import Slider from "./CategorySlider";
import MyComponent from "./PriceRangeFilter";
import TargetCrop from "./TargetCropFilter";
class ProductDisplay extends React.Component {
  state = {
    seedPestiside: [
      {
        name: "seed1",
        price: "1000",
        url:
          "https://i.pinimg.com/originals/63/02/ab/6302abd85cb038367d3887738cdbe251.jpg",
        targrt_plant: "Paddy,Rice",
      },
      {
        name: "seed1",
        price: "1000",
        url:
          "https://i.pinimg.com/originals/63/02/ab/6302abd85cb038367d3887738cdbe251.jpg",
        targrt_plant: "Paddy,Rice",
      },
      {
        name: "seed1",
        price: "1000",
        url:
          "https://www.trendingpackaging.com/wp-content/uploads/2016/09/roundup.png",
        targrt_plant: "Paddy,Rice",
      },
      {
        name: "seed1",
        price: "1000",
        url:
          "https://5.imimg.com/data5/QP/OU/MY-7157443/chemical-pesticides-500x500.jpg",
        targrt_plant: "Paddy,Rice",
      },
      {
        name: "seed1",
        price: "1000",
        url:
          "https://5.imimg.com/data5/WA/LA/MY-11343903/organic-paddy-seed-500x500.jpg",
        targrt_plant: "Paddy,Rice",
      },
    ],
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
