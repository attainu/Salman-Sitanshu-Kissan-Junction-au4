import React from "react";
import image from "../../../Image/loginlogo.png";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../../../ActionCreater/user'

const { login } = Action;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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
    let { email, password, } = this.state
    this.props.login({
      email, password
    })
  }

  render() {
    let { email, password } = this.state

    return (
      <div classpassword="logincontainer">
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">
            {" "}
            <span style={{ color: "#28ca2f" }}> Login </span> Here
          </div>
          <div className="content">
            <div className="image">
              <img
                src={image}
                className="rounded"
                style={{ width: "100px" }}
                alt="iamge"
              />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="email" placeholder="username" value={email} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" onClick={this.onSubmit} className="btn">
              Login
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
  return bindActionCreators({ login }, dispatch)
}

export default connect(take, change)(Login);