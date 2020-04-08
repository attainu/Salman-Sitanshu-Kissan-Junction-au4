import React from 'react';
import '../../Css/profile.css';
import { Image, Nav, Button } from 'react-bootstrap';
import YourProduct from './YourProduct';
import Purchased from './Purchased';
import Sold from './Sold';
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../../ActionCreater/notification'

const { notify } = Action;

function Profile(props) {
  const { notify } = props;

  return (
    <>
      <div class="d-flex flex-column ">
        <div class="d-flex flex-fill justify-content-around flex-wrap m-5  flex-row">
          <div class="my-auto profile-img">
            <Image className='shadow' src="https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg" rounded fluid />
            <div className='text-center'>
              <Button className='btn-1 mt-3'
                onClick={() => notify({ type: 'success', msg: 'Edit Profile' })}
                variant="secondary" size="sm">
                Edit Profile
          </Button>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-start">
            <h1 className='mb-0' style={{ 'font-weight': '500' }}>Salman Ahmed</h1>
            <p className='pl-2'>Farmer</p>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Email:</th>
                  <td>salmanahmed@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">Phone: </th>
                  <td>+91 9987952528</td>
                </tr>
                <tr>
                  <th scope="row">Address: </th>
                  <td>175/D Arafat Mansion<br />Mumbai, Maharashtra, India</td>
                </tr>
                <tr>
                  <th scope="row">Gender: </th>
                  <td>Male</td>
                </tr>
                <tr>
                  <th scope="row">Birthday: </th>
                  <td>April 1, 1997</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex flex-column box4 justify-content-end">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Occupation: </th>
                  <td>Farming</td>
                </tr>
                <tr>
                  <th scope="row">Types:</th>
                  <td>Onion<br />Cucumber<br />Tomato<br />Spices<br />Brinjal</td>
                </tr>
                {/* <tr>
                  <th scope="row">Gender: </th>
                  <td>Male</td>
                </tr> */}
              </tbody>
            </table>

          </div>
        </div>
        <Nav variant="tabs" className="justify-content-center" defaultActiveKey="/product">
          <Link to='/profile/'>
            <Nav.Item>
              <Nav.Link href="/product">Your Products</Nav.Link>
            </Nav.Item>
          </Link>
          <Link to='/profile/purchased'>
            <Nav.Item>
              <Nav.Link href="purchased">Purchased</Nav.Link>
            </Nav.Item>
          </Link>
          <Link to='/profile/sold'>
            <Nav.Item>
              <Nav.Link href="sold">Sold</Nav.Link>
            </Nav.Item>
          </Link>
        </Nav>
        <Route exact path='/profile/'>
          <YourProduct />
        </Route>
        <Route path='/profile/purchased'>
          <Purchased />
        </Route>
        <Route path='/profile/sold'>
          <Sold />
        </Route>

        {/* <div class="d-flex flex-fill flex-row m-5 black">
          <div class="green flex-fill">
            Flex2
            </div>
          <div class="green flex-fill">
            Flex1
          </div>
          <div class="green flex-fill">
            Flex1
          </div>
          <div class="green flex-fill">
            Flex1
          </div>

        </div>
        <div class="d-flex flex-fill flex-row m-5 black">
          <div class="green flex-fill">
            Flex3
            </div>
          <div class="green flex-fill">
            Flex1
          </div>
          <div class="green flex-fill">
            Flex1
          </div>
        </div>*/}
      </div>

    </>

  );

}

const take = (state) => {
  return state;
}

const change = (dispatch) => {
  return bindActionCreators({ notify }, dispatch)
}

export default connect(take, change)(Profile);