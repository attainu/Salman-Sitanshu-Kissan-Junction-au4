import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../../Css/machinelist.css";
import Slider from "./CategorySlider";
import MyComponent from "./PriceRangeFilter";
import TargetCrop from "./TargetCropFilter";
class MachineList extends React.Component {
  state = {
    seedPestiside: [
      {
        name: "Tractor",
        price: "₹ 600/h",
        url:
          "https://lh3.googleusercontent.com/proxy/WmjsPvE4GiuS-VpxBs_hn2wTK9FstdfTVSwdxybG8HRXvrGpzkjmSwliOE52e0UrQ48UV2UY9klW_UcEGJqhwOjrSUP6Esw0FfQho-S_M5xklQIlEcssaz06Snv-",
        targrt_plant: "Paddy,Rice",
        power: "121 Hp",
      },
      {
        name: "Harvestor",
        price: "₹ 1000/h",
        url: "https://miro.medium.com/max/2732/1*NGfEMLnfOQESRSW3Wh8HEA.jpeg",
        targrt_plant: "Paddy,Rice",
        power: "180 Hp",
      },
      {
        name: "Sprinkle Machine",
        price: "₹ 1000/h",
        url:
          "https://3.imimg.com/data3/BJ/NV/MY-11660582/battery-powered-sprayer-250x250.jpg",
        targrt_plant: "Paddy,Rice",
        power: "19 Hp",
      },
      {
        name: "Corn Shellr Machine",
        price: "₹ 1000/h",
        url:
          "https://5.imimg.com/data5/WV/LF/UB/SELLER-3213215/corn-sheller-pedal-operated-500x500.jpg",
        targrt_plant: "Paddy,Rice",
        power: "190 Hp",
      },
      {
        name: "seed1",
        price: "₹ 1000/h",
        url:
          "https://5.imimg.com/data5/WA/LA/MY-11343903/organic-paddy-seed-500x500.jpg",
        targrt_plant: "Paddy,Rice",
        power: "119 Hp",
      },
      {
        name: "Tractor",
        price: "₹ 600/h",
        url:
          "https://lh3.googleusercontent.com/proxy/WmjsPvE4GiuS-VpxBs_hn2wTK9FstdfTVSwdxybG8HRXvrGpzkjmSwliOE52e0UrQ48UV2UY9klW_UcEGJqhwOjrSUP6Esw0FfQho-S_M5xklQIlEcssaz06Snv-",
        targrt_plant: "Paddy,Rice",
        power: "121 Hp",
      },
      {
        name: "Harvestor",
        price: "₹ 1000/h",
        url: "https://miro.medium.com/max/2732/1*NGfEMLnfOQESRSW3Wh8HEA.jpeg",
        targrt_plant: "Paddy,Rice",
        power: "180 Hp",
      },
      {
        name: "Sprinkle Machine",
        price: "₹ 1000/h",
        url:
          "https://3.imimg.com/data3/BJ/NV/MY-11660582/battery-powered-sprayer-250x250.jpg",
        targrt_plant: "Paddy,Rice",
        power: "19 Hp",
      },
      {
        name: "Corn Shellr Machine",
        price: "₹ 1000/h",
        url:
          "https://5.imimg.com/data5/WV/LF/UB/SELLER-3213215/corn-sheller-pedal-operated-500x500.jpg",
        targrt_plant: "Paddy,Rice",
        power: "190 Hp",
      },
      {
        name: "seed1",
        price: "₹ 1000/h",
        url:
          "https://5.imimg.com/data5/WA/LA/MY-11343903/organic-paddy-seed-500x500.jpg",
        targrt_plant: "Paddy,Rice",
        power: "119 Hp",
      },
    ],
  };

  render() {
    return (
      <>
        <div className="container-fluid listbackground ">
          <Row>
            <Col lg={3} md={3} sm={12} className="border-right sticky-top">
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
              <Row id="ads">
                {this.state.seedPestiside &&
                  this.state.seedPestiside.map((item, index) => {
                    return (
                      <Col lg={4} md={4} sm={12}>
                        <div class="card rounded mt-5">
                          <div class="card-image">
                            <span class="card-notify-year">{item.power}</span>
                            <img
                              class="img-fluid"
                              src={item.url}
                              alt="Alternate Text"
                              style={{ width: "18.rem", height: "12rem" }}
                            />
                          </div>
                          <div class="card-image-overlay m-auto">
                            <span class="card-detail-badge mr-3">
                              {item.price}
                            </span>
                            <span class="card-detail-badge">
                              Target Crop- {item.targrt_plant}
                            </span>
                          </div>
                          <div class="card-body text-center">
                            <div class="ad-title m-auto">
                              <h5>{item.name}</h5>
                            </div>

                            <Button class="ad-btn">Preview Here</Button>
                          </div>
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

export default MachineList;
