import React, { Component } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="clearfix">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React State vs Redux State</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/items">
                <Nav.Link href="#link">Items</Nav.Link>
              </Link>
              <Link to="/invoices/">
                <Nav.Link href="#link">Invoices</Nav.Link>
              </Link>
            </Nav>

            <Nav>
              <Link to="/user-profile/">
                <Nav.Link href="#home">UserName</Nav.Link>
                <div>
                  <Image
                    src="http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200"
                    roundedCircle
                    style={{ width: "50px" }}
                  />
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
