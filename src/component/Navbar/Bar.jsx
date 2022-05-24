import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import "./bar.css";

function Bar(props) {
  function Logout() {
    return sessionStorage.clear(<Navigate to="/" />);
  }

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn === false) {
    return <Navigate to="/" />;
  }

  if (isLoggedIn) {
    return (
      <Navbar
        className="animate-navbar nav-theme justify-content-between"
        bg="dark"
        variant="dark"
        id="dark-nav-dropdown"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>
              {" "}
              <font>Policy</font>
              <font1>Administration</font1>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown className="active" title="Consumer Business">
                <NavDropdown.Item>
                  {" "}
                  <Link to="/createbusiness">Create Consumer Business</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/updatebusiness">Update Consumer Business</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/viewbusiness">View Consumer Business</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown activeClassName="active" title="Business Property">
                <NavDropdown.Item>
                  {" "}
                  <Link to="/createproperty">Create Business Property</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/updateproperty">Update Business Property</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/viewproperty">View Business Property</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown activeClassName="active" title="Policy">
                <NavDropdown.Item>
                  {" "}
                  <Link to="/createpolicy">Create Policy</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/issuepolicy">Issue Policy</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/viewpolicy">View Policy</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="/quotes">Quote</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link href="/" onClick={() => Logout()}>
              <Button className="btn btn-danger">Logout</Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark" active="true" expand="lg">
        <Container>
          <Navbar.Brand>
            {" "}
            <font>Policy</font>
            <font1>Administration</font1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Link to="/signin">
              <Button>Sign In</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Bar;
