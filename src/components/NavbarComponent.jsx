import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import "../css/navbar.css";

const NavbarComponent = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);
  const redirect = (page) => history.push(page);
  return (
    <Navbar expand="md" light>
      <Container>
        <NavbarBrand onClick={() => redirect("/")}>
          <img
            src="https://refactory.id/wp-content/uploads/2020/01/refactory-hd-125x52.png"
            alt="refactory logo"
          />
        </NavbarBrand>
        <Button onClick={toggle}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </Button>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                onClick={() => redirect("/")}
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => redirect("/courses")}
                className={location.pathname === "/courses" ? "active" : ""}
              >
                Courses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => redirect("/")}>Custom Training</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => redirect("/")}>Case Studies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => redirect("/blogs")}
                className={location.pathname === "/blogs" ? "active" : ""}
              >
                Blogs
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
