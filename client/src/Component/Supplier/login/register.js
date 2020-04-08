import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../../../ActionCreater/user'

const { register } = Action;

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      cpassword: '',
      mobile: '',
      name: '',
    }
    this.handleChange = this.handleChange.bind();
    this.onSubmit = this.onSubmit.bind();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  onSubmit = () => {
    let { email, password, name, mobile } = this.state
    this.props.register({
      email, password, mobile, name
    })
  }

  render() {
    const { register } = this.props;

    return (
      <div className="container">
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">
            <span style={{ color: "#28ca2f" }}> Register </span>
            With Us
          </div>
          <div className="content">
            <div className="form">
              <form
              >
                <div class="form-group form-inline">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Full Name"
                    name='name'
                    value={this.state.name} onChange={this.handleChange}
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder=" Enter emailId"
                    value={this.state.email} onChange={this.handleChange}
                  />
                </div>
                <div className=" form-group form-inline">
                  <label>Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    placeholder=" Enter contact number"
                    value={this.state.mobile} onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder=" Type password Here"
                    value={this.state.password} onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"> Confirm Password</label>
                  <input
                    type="password"
                    name="cpassword"
                    placeholder=" Type password Here"
                    value={this.state.cpassword} onChange={this.handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="footer">
            <button type="submit"
              onClick={this.onSubmit}
              className="btn btn-success">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}


const take = (state) => {
  return state;
}

const change = (dispatch) => {
  return bindActionCreators({ register }, dispatch)
}

export default connect(take, change)(Register);