import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import logo from '../../Image/logo.png'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Link to='/'><Navbar.Brand href="#home"><img className='mr-1'
          src={logo}
          width='35px' />Agricom</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Link to='/test'><Nav.Link href="#link">Contacts</Nav.Link></Link>
          </Nav>
          <NavDropdown alignRight id="dropdown-no-caret" className="p-0"
            title={
              <img className="m-0 rounded-circle p-0 "
                width="35px"
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQheGtOjDugQL_DtA6EDn5no8Hn5jnJNKJOdqoYwRXQJ6E24-fW&usqp=CAU'
                alt="user pic" />}
            id={`dropdown-button-drop`}
            >
            <NavDropdown.Item href="#action/3.1">
              <Button className='mr-3' variant="outline-success">Signin</Button>
              <Button variant="outline-success">Signup</Button>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <Link to='/profile'><NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item></Link>
            <Link to='/profile/purchased'><NavDropdown.Item href="#action/3.2">Ordered Product</NavDropdown.Item></Link>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
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