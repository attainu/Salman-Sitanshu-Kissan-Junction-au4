import React from "react";
import "../../Css/profile.css";
import PageDescription from "../Home/PageDescription";
import { connect } from "react-redux";
import { Image, Button } from "react-bootstrap";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { bindActionCreators } from "redux";
import Action from "../../ActionCreater/user";
import Notify from "../../ActionCreater/notification";

const { addCart } = Action;
const { notify } = Notify;

class Grainpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.location.aboutProps.item,
    };
    this.addToCart = this.addToCart.bind();
  }

  addToCart = () => {
    if (this.props.userInfo.id)
      this.props.addCart(this.props.userInfo.id, this.props.location.aboutProps.item.id)
    else
      this.props.dispatch({
        type: "addToCart",
        payload: this.props.location.aboutProps.item,
      });
  };

  render() {
    const shareUrl = window.location.href;
    return (
      <>
        <div className="d-flex flex-column">
          <div className="d-flex flex-fill justify-content-around flex-wrap m-5  flex-row">
            <Image
              className="shadow content"
              src={this.state.item.imageurl}
              rounded
            />
            <div className="text-center"></div>
            <div className="d-flex flex-column justify-content-start">
              <h1 className="mb-0" style={{ "font-weight": "500" }}>
                <span style={{ color: "#28ca2f" }}>
                  {this.state.item.productName}
                </span>
              </h1>
              <p className="pl-2">Seller Amitabh Kumar</p>
              <table className="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Price: </th>
                    <td>₹ {this.state.item.price}</td>
                  </tr>

                  <tr>
                    <th scope="row"> Product Size </th>
                    <td>{this.state.item.productSize}</td>
                  </tr>
                  <tr>
                    <th>Quantity (kg)</th>
                    <td>
                      <Button className="mr-3" variant="secondary">
                        -
                      </Button>
                      1
                      <Button className="ml-3" variant="secondary">
                        +
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th>Total:</th>
                    <td>₹1750</td>
                  </tr>
                  <tr>
                    <th>Avaliable Location</th>
                    <td>{this.state.item.productDosage}</td>
                  </tr>
                  <tr>
                    <th>Share Product:</th>
                    <td>
                      <WhatsappShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button"
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                      <FacebookShareButton
                        url={shareUrl}
                        className="Demo__some-network__share-button ml-1"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-around">
                <Button
                  className="btn-2"
                  variant="dark"
                  onClick={this.addToCart}
                >
                  Add To Cart
                </Button>

                <Button className="btn-2" variant="success">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <PageDescription />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    machine: state.productList, userInfo: state.user.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addCart, notify }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Grainpage);
