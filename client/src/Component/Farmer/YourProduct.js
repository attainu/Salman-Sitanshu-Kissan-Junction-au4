import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
// import icon1 from "../../Image/service1.jpg";
// import icon2 from "../../Image/service2.jpg";
// import icon3 from "../../Image/work2.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import Action from "../../ActionCreater/notification";
function YourProduct(props) {
  return (
    <>
      <Link to="/product-register" className="d-flex justify-content-center">
        <Button
          as="input"
          className=" mt-4 w-md-25"
          type="button"
          value="Add Product"
        />
      </Link>
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
        {/* <Card className="box4 m-3 shadow">
            <Card.Img variant="top" src={icon1} />
            <Card.Body>
              <Card.Title>Spices</Card.Title>
              <Card.Text>
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Price:</th>
                      <td>₹40 per kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Quantiy: </th>
                      <td>1200 kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Min Order: </th>
                      <td>50kg</td>
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
          <Card className="box4 m-3 shadow">
            <Card.Img variant="top" src={icon2} />
            <Card.Body>
              <Card.Title>Tamato</Card.Title>
              <Card.Text>
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Price:</th>
                      <td>₹40 per kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Quantiy: </th>
                      <td>1200 kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Min Order: </th>
                      <td>50kg</td>
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
          <Card className="box4 m-3 shadow">
            <Card.Img variant="top" src={icon1} />
            <Card.Body>
              <Card.Title>Onion</Card.Title>
              <Card.Text>
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Price:</th>
                      <td>₹40 per kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Quantiy: </th>
                      <td>1200 kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Min Order: </th>
                      <td>50kg</td>
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
          <Card className="box4 m-3 shadow">
            <Card.Img variant="top" src={icon2} />
            <Card.Body>
              <Card.Title>Cucumber</Card.Title>
              <Card.Text>
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Price:</th>
                      <td>₹40 per kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Quantiy: </th>
                      <td>1200 kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Min Order: </th>
                      <td>50kg</td>
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
          <Card className="box4 m-3 shadow">
            <Card.Img variant="top" src={icon1} />
            <Card.Body>
              <Card.Title>Tomato</Card.Title>
              <Card.Text>
                <table class="table table-sm table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">Price:</th>
                      <td>₹40 per kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Quantiy: </th>
                      <td>1200 kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Min Order: </th>
                      <td>50kg</td>
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
          </Card> */}
      </CardDeck>
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

export default connect(mapStateToProps, mapDispatchToProps)(YourProduct);
