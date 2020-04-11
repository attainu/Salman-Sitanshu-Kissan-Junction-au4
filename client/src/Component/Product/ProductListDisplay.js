import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../../Css/productlist.css";
import Slider from "./CategorySlider";
import MyComponent from "./PriceRangeFilter";
import TargetCrop from "./TargetCropFilter";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

class ProductDisplay extends React.Component {
  state = {
    seedPestiside: [],
  };

  //product data fetch for seed and pestisides
  componentDidMount = () => {
    var data = fetch("http://localhost:5000/product/selectseed");
    data.then((res) => {
      res.json().then((data) => {
        this.setState({
          seedPestiside: data,
        });
        this.props.dispatch({
          type: "add_product",
          payload: this.state.seedPestiside,
        });
      });
    });
  };

  //clear filter
  clearFilter = () => {
    this.props.dispatch({
      type: "clearFilter",
      payload: "product",
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
                  <Button
                    className="btn btn-warning"
                    onClick={() => {
                      this.clearFilter();
                    }}
                  >
                    <FaFilter /> Clear Filter
                  </Button>
                  <Slider type={["Seed", "Pesticides"]} />
                </Col>
              </Row>
              <MyComponent type="seed_pestiside" />
              <TargetCrop type="seed_pestiside" />
            </Col>
            <Col lg={9} md={9} sm={12}>
              <Row>
                {this.props.product &&
                  this.props.product.map((item, index) => {
                    return (
                      <Col lg={4} md={4} sm={12}>
                        <div className="card mt-3">
                          <img
                            src={item.imageurl}
                            alt="Denim Jeans"
                            style={{ width: "18.rem", height: "15rem" }}
                          ></img>
                          <h3>{item.productName}</h3>
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
                              {item.targetplant}
                            </span>{" "}
                          </p>

                          <p>
                            <Link
                              to={{
                                pathname: "/single-product",
                                aboutProps: { item: item, type: "seed" },
                              }}
                            >
                              {" "}
                              <button>Preview Here</button>
                            </Link>
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

const mapStateToProps = (state) => {
  return {
    product: state.productList.productListCopy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay);
