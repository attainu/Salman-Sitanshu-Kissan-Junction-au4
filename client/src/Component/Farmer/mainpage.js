import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./../../Css/farmer.css";
import image1 from "../../Image/machine1.jpg";
import image2 from "../../Image/oldmachine.jpg";
import image3 from "../../Image/pesisides.jpg";
import image4 from "../../Image/maize.jpg";
import { Redirect } from "react-router";
class FarmerHomePage extends React.Component {

  state = {
    topic: [
      {
        name: " Purchase Seeds, Pesticides &  Fertilizer",
        url: image3,
        category:"seed"
        
      },
      {
        name: "Sell Your Grains through Us",
        url: image4,
        category:"grain"
      },
      {
        name: "Lend All of Heavy Machine And Tractros",
        url: image1,
        category:"machine"
      },
      {
        name: "Sell Your Used Instruments",
        url: image2,
        category:"instument",
      }
    ],
    
    redirectToSeed:false,
    redirectToMachine:false,
    redirectToSell:false,
    redirectToSellInstrument:false
  };
//handle route for category choose 

  handleCategory=(value)=>{
    if(value==='seed')
    this.setState({redirectToSeed:true})
      if(value==='machine')
    this.setState({redirectToMachine:true})
      if(value==='grain')
    this.setState({redirectToSell:true})
     if(value==='instument')
    this.setState({redirectToSellInstrument:true})
  }

  render() {
    //redirect to seed and pestisides 
    if (this.state.redirectToSeed) {
      return <Redirect to="/product-list" />;
    }
    //redirect to machine 
    if (this.state.redirectToMachine) {
      return <Redirect to="/machine-list" />;
    }
    //redirect to sell garin
    if (this.state.redirectToSell) {
      return <Redirect to="/sell-grain" />;
    }
    //redirect to sell instrument
     if (this.state.redirectToSellInstrument) {
      return <Redirect to="/sell-instrument" />;
    }
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
                          <Button className="btn-success mt-4" onClick={()=>{this.handleCategory(item.category)}}>
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
