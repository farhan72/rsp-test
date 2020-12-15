import React, { useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import "../css/navbar.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container className="p-0">
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img
            src="https://refactory.id/wp-content/uploads/2020/01/refactory-hd-125x52.png"
            alt="refactory logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Courses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Custom Training</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Case Studies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Blogs</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarComponent;
