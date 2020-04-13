import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import Action from "../../ActionCreater/notification";
// import { Link } from "react-router-dom";

function Purchase(props) {
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Product Name</th>
            <th>Qunatity</th>
            <th>Seller Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.products && props.products.map((item, index) => {
            if (item.connectType === "booked") {
              let product = item.product
              return (<tr key={index}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>50 kg</td>
                <td>Ramprasad</td>
                <td>₹15 per kg</td>
                <td>Jan 14, 2019</td>
                <td>₹750</td>
              </tr>)
            }
          })}
          <tr>
            <td>1</td>
            <td>Onion</td>
            <td>50 kg</td>
            <td>Ramprasad</td>
            <td>₹15 per kg</td>
            <td>Jan 14, 2019</td>
            <td>₹750</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Onion</td>
            <td>50 kg</td>
            <td>Ramprasad</td>
            <td>₹15 per kg</td>
            <td>Jan 14, 2019</td>
            <td>₹750</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Onion</td>
            <td>50 kg</td>
            <td>Ramprasad</td>
            <td>₹15 per kg</td>
            <td>Jan 14, 2019</td>
            <td>₹750</td>
          </tr>
          <tr>
            <td colSpan="5"></td>
            <th>Total Expenditure:</th>
            <td>₹60000</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.user.currentUser.connect_products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
