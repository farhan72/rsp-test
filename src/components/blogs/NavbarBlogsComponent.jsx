import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import {
  NavbarBlogs,
  NavBlogs,
  NavBlogsBrand,
  NavBlogsLink,
  NavBlogsMenu,
  NavTogglerBlogs,
} from "../../styled-components/blogs/navbar";

export default function NavbarBlogsComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);
  const isActive = (pathName) => location.pathname === pathName;
  return (
    <NavBlogs>
      <Container className="text-center ">
        <NavbarBlogs>
          <NavBlogsBrand>POST CATEGORIES</NavBlogsBrand>
          <NavBlogsMenu open={isOpen}>
            <NavBlogsLink className="d-md-none d-lg-none d-sm-block d-sm-block text-right icon">
              <span className="times" onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </NavBlogsLink>
            <NavBlogsLink style={isActive("/blogs") ? styles.active : null}>
              Blog
            </NavBlogsLink>
            <NavBlogsLink>Engineering</NavBlogsLink>
            <NavBlogsLink>Profile</NavBlogsLink>
            <NavBlogsLink>Tutorial</NavBlogsLink>
            <NavBlogsLink>Tips & Trick</NavBlogsLink>
            <NavBlogsLink>Grow & Culture</NavBlogsLink>
            <NavBlogsLink>Newsroom</NavBlogsLink>
            <NavBlogsLink>Promo</NavBlogsLink>
          </NavBlogsMenu>
          <NavTogglerBlogs>
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              onClick={toggle}
            />
          </NavTogglerBlogs>
        </NavbarBlogs>
      </Container>
    </NavBlogs>
  );
}

const styles = {
  active: {
    backgroundColor: "#008cbd",
  },
};
