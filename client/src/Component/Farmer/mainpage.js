import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./../../Css/farmer.css";
import image1 from "../../Image/machine1.jpg";
import image2 from "../../Image/oldmachine.jpg";
import image3 from "../../Image/pesisides.jpg";
import image4 from "../../Image/maize.jpg";
class FarmerHomePage extends React.Component {
  state = {
    topic: [
      {
        name: " Purchase Seeds, Pesticides &  Fertilizer",
        url: image3
      },
      {
        name: "Sell Your Grains through Us",
        url: image4
      },
      {
        name: "Lend All of Heavy Machine And Tractros",
        url: image1
      },
      {
        name: "Sell Your Used Instruments",
        url: image2
      }
    ]
  };

  render() {
    return (
      <>
        <div className="background">
          <Container>
            <Row className="boxhome">
              {this.state.topic &&
                this.state.topic.map((item, index) => {
                  return (
                    <Col
                      className="col-lg-6 col-md-6 col-sm-12 mt-4 mb-5 "
                      key={index}
                    >
                      <div
                        class="styl_box1"
                        style={{ backgroundImage: `url(${item.url})` }}
                      >
                        <div class="single_analize__block text-center ">
                          <h2>{item.name}</h2>
                          <Button className="btn-success mt-4">
                            Explore More
                          </Button>{" "}
                        </div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default FarmerHomePage;
