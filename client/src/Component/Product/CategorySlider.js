import React from "react";
import "../../Css/machinelist.css";
import { Row, Col } from "react-bootstrap";
class Slider extends React.Component {
  handleChange = (e) => {
    console.log(e);
  };
  render() {
    return (
      <>
        <Row>
          <Col lg={8} md={8} sm={12}>
            <h6 className="mt-4 border-bottom">Category Filter</h6>
          </Col>
        </Row>
        <div class="wrapper">
          <div class="toggle_radio">
            <input
              type="radio"
              class="toggle_option"
              id="first_toggle"
              name="toggle_option"
              onClick={(e) => {
                this.handleChange(e.target.id);
              }}
            ></input>
            <input
              type="radio"
              checked
              class="toggle_option"
              id="second_toggle"
              name="toggle_option"
              onClick={(e) => {
                this.handleChange(e.target.id);
              }}
            ></input>

            <label for="first_toggle">
              <p>Seeds</p>
            </label>
            <label for="second_toggle">
              <p>Pestisides</p>
            </label>

            <div class="toggle_option_slider"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Slider;
