import React from "react";

import { Row, Col, Form } from "react-bootstrap";
const TargetCrop = () => {
  return (
    <>
      <Row>
        <Col lg={8} md={8} sm={12}>
          <h6 className="mt-5 border-bottom">Target Filter</h6>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={12} md={12} sm={12}>
          <fieldset>
            <Form.Group as={Row}>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Paddy"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Rice"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Maize"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="Fruits"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>
        </Col>
      </Row>
    </>
  );
};
export default TargetCrop;
