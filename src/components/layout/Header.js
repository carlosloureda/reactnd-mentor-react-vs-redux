import React, { Component } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { userName, avatar } = this.props;
    return (
      <header className="clearfix">
        <Navbar bg="light" expand="lg">
          <Link to="/" className="navbar-brand">
            React State vs Redux State
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/items" className="nav-link">
                Items
              </Link>
              <Link to="/invoices/" className="nav-link">
                Invoices
              </Link>
            </Nav>

            <Nav>
              <Link to="/user-profile/" className="nav-link">
                {userName}
                <div>
                  <Image src={avatar} roundedCircle style={{ width: "50px" }} />
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
