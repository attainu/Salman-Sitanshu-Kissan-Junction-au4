
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios'

class Google extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: '' };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  }

  googleResponse = (response) => {
    console.log(response.profileObj)
    // console.log(tokenBlob)
    // const options = {
    //   method: 'POST',
    //   body: tokenBlob,
    //   mode: 'cors',
    //   cache: 'default'
    // };
    // axios.post('http://localhost:5000/oauth/api', options).then(user => {
    //   console.log(user)
    // })
  };

  onFailure = (error) => {
    console.error(error);
  }

  render() {
    let content = !!this.state.isAuthenticated ?
      (
        <div>
          <p>Authenticated</p>
          <div>
            {this.state.user.email}
          </div>
          <div>
            <button onClick={this.logout} className="button">
              Log out
                        </button>
          </div>
        </div>
      ) :
      (
        <div>
          <GoogleLogin
            clientId="829821026200-pu1d85t4lfc8m8qohpqakgdvhe9595fi.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.onFailure}
          />
        </div>
      );

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default Google;
