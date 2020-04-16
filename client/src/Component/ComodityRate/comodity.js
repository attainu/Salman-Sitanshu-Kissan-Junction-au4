import React, { Component } from "react";
import Data from "../../Data/states";
import { Row, Col, Form, Table } from "react-bootstrap";
import Chart from "./demochart";
export default class ComodityData extends Component {
  state = {
    statelist: Data.states,
    state: "Choose State....",
    fetchResult: [],
    district: [],
    districtSelect: "",
    foundDistrict: false,
    resultToShow: [],
  };

  //handle state change
  handleChangeState = (e) => {
    let { state, fetchResult, district } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
      district: [],
    });
    //to filter all district
    var districtFiltered = fetchResult.filter((value) => {
      return value.state === e.target.value;
    });
    //to filter unique distict
    const unique = [...new Set(districtFiltered.map((item) => item.district))];

    this.setState({
      district: unique,
    });
  };

  //handle distict Change
  handleChangeDistrict = (e) => {
    let { state, fetchResult, district } = this.state;
    var result = fetchResult.filter((value) => {
      return value.district === e.target.value;
    });
    this.setState({
      resultToShow: result,
    });
  };

  componentDidMount = () => {
    var data = fetch(
      "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001967d7349baf94f7d47de66173d39a48e&format=json&offset=0&limit=4000"
    );
    data.then((res) => {
      res.json().then((data) => {
        this.setState({
          fetchResult: data.records,
        });
      });
    });
  };
  render() {
    let { state, fetchResult, district, resultToShow } = this.state;
    return (
      <>
        <div class="d-flex justify-content-around">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                name="company_state"
                value={this.state.state}
                onChange={this.handleChangeState}
              >
                {this.state.statelist.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                name="districtSelect"
                value={this.state.districtSelect}
                onChange={this.handleChangeDistrict}
              >
                {this.state.district.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </div>
        <Row>
          <Col>
            <Chart />
            <Table striped bordered hover variant="success">
              <thead>
                <tr>
                  <th>Market</th>
                  <th>Commodity</th>
                  <th>Variety</th>
                  <th>Arrival date</th>
                  <th>Min Price</th>
                  <th>Max Price</th>
                  <th>Modal Price</th>
                </tr>
              </thead>
              <tbody>
                {resultToShow.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.market} </td>
                      <td>{item.commodity} </td>
                      <td>{item.variety} </td>
                      <td>{item.arrival_date} </td>
                      <td>{item.min_price} </td>
                      <td>{item.max_price} </td>
                      <td>{item.modal_price} </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </>
    );
  }
}
