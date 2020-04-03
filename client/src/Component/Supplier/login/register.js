import React from "react";
import image from "../../../Image/loginlogo.png";

export class Register extends React.Component {
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={image} style={{ width: "100px" }} alt="hello" />
          </div>
          <div className="form">
            <form>
              <div class="form-group form-inline">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Full Name"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder=" Enter emailId" />
              </div>
              <div className=" form-group form-inline">
                <label>Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="username"
                  placeholder=" Enter contact number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  placeholder=" Type password Here"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
