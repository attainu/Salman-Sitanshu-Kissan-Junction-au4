import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function YourProduct(props) {
  return (
    <>
      {(props.type === "Seller") ?
        <>
          <Link to="/machine-register" className="d-flex justify-content-center">
            <Button
              as="input"
              className=" mt-4 w-md-25"
              type="button"
              value="Add Machine"
            />
          </Link>
          <Link to="/seed-register" className="d-flex justify-content-center">
            <Button
              as="input"
              className=" mt-4 w-md-25"
              type="button"
              value="Add Material"
            />
          </Link></> :
        <Link to="/sell_grain" className="d-flex justify-content-center">
          <Button
            as="input"
            className=" mt-4 w-md-25"
            type="button"
            value="Add Material"
          />
        </Link>}

      <CardDeck className="m-4 d-flex flex-wrap justify-content-center flex-row">
        {props.products && props.products.map((info, index) => {
          if (info.connectType === "myproduct") {
            let product = info.product
            return (
              <Card key={index} className="box4 m-3 shadow">
                <Card.Img variant="top" src={product.imageurl} />
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>
                    <table class="table table-sm table-borderless">
                      <tbody>
                        <tr>
                          <th scope="row">Price:</th>
                          <td>₹{product.price} per kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Quantiy: </th>
                          <td>product size kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Min Order: </th>
                          <td>{product.productDosage}kg</td>
                        </tr>
                      </tbody>
                    </table>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex flex-row justify-content-around">
                  <Button className="btn-1" variant="secondary" size="sm">
                    Edit
              </Button>

                  <Button className="btn-1" variant="danger" size="sm">
                    Delete
              </Button>
                </Card.Footer>
              </Card>
            )
          }
        })}
      </CardDeck>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.user.currentUser.connect_products,
    type: state.user.currentUser.type
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourProduct);
