import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import logo from '../../Image/logo.png'
import { Link } from "react-router-dom";
import Google from '../Google/login';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../../ActionCreater/user'

const { logout } = Action;


function NavBar(props) {
  const { Authenticated, logout } = props;
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Link to='/'><Navbar.Brand href="#home"><img className='mr-1'
          src={logo}
          width='35px' />Agricom</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
            <Nav.Link href="#link">Services</Nav.Link>
           <Link to='/app'> <Nav.Link href="#link">Blog</Nav.Link></Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Link to='/test'><Nav.Link href="#link">Contacts</Nav.Link></Link>
          </Nav>
          <NavDropdown focusFirstItemOnShow={false} alignRight id="dropdown-no-caret" className="p-0"
            title={
              <img className="m-0 rounded-circle p-0 "
                width="35px"
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQheGtOjDugQL_DtA6EDn5no8Hn5jnJNKJOdqoYwRXQJ6E24-fW&usqp=CAU'
                alt="user pic" />}
            id={`dropdown-button-drop`}
          >
            {(!Authenticated) ? (<>
              <NavDropdown.Item >
                <Link to='/login'><Button className='mr-3' variant="outline-success">Signin</Button></Link>
                <Link to='/signup'><Button variant="outline-success">Signup</Button></Link>
              </NavDropdown.Item>
              <NavDropdown.Divider className="text-center" />
              <NavDropdown.Item href="#action/3.1">
                <Google />
              </NavDropdown.Item>
            </>
            ) : (
                <>
                  <NavDropdown.Divider />
                  <Link to='/profile'><NavDropdown.Item href='/profile' >Profile</NavDropdown.Item></Link>
                  <Link to='/profile/purchased'><NavDropdown.Item href='/' >Ordered Product</NavDropdown.Item></Link>
                  <Link to='/cart'><NavDropdown.Item href='/'>Cart</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  <Link to='/'><NavDropdown.Item href="/" onClick={() => logout()}>Logout</NavDropdown.Item></Link>
                </>
              )}


          </NavDropdown>
          <Form inline>
            <FormControl variant="outline-success" type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </>

  );

}

const take = (state) => {
  const { Authenticated } = state.user
  return {
    Authenticated
  };
}

const change = (dispatch) => {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(take, change)(NavBar)