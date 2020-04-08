import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Row, Col } from "react-bootstrap";
const MyComponent = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Row>
        <Col lg={8} md={8} sm={12}>
          <h6 className="mt-5 border-bottom">Price (Min to Max)</h6>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={3} md={3} sm={3}>
          <span style={{ color: "#28ca2f" }}>₹100</span>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <RangeSlider
            sm={12}
            value={value}
            variant="success"
            min={100}
            max={1000}
            tooltipLabel={(value) => ` ₹${value}`}
            onChange={(changeEvent) => setValue(changeEvent.target.value)}
          />
        </Col>
        <Col lg={3} md={3} sm={3} style={{ marginRight: "-2px" }}>
          <span style={{ color: "#28ca2f" }}>₹1000</span>
        </Col>
      </Row>
    </>
  );
};
export default MyComponent;
