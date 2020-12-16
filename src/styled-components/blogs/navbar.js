import styled from "styled-components";

const NavBlogs = styled.nav`
  background-color: #005978;
  @media only screen and (max-width: 768px) {
    margin-top: 78px;
  }
`;

const NavbarBlogs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavBlogsBrand = styled.a`
  text-decoration: none;
  padding: 20px;
  color: #ffffff;
  text-align: center;
  display: none;

  @media only screen and (max-width: 768px) {
    display: inline-block;
  }
`;

const NavBlogsMenu = styled.div`
  background-color: #005978;

  @keyframes sidebar {
    0% {
      left: -100px;
    }

    100% {
      left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 100vh;
    display: ${({ open }) => (open === true ? "block" : "none")};
    position: absolute;
    width: 300px;
    left: 0;
    top: 0;
    z-index: 99;

    &::before {
      content: "";
      background-color: rgba(0, 0, 0, 0.6);
      width: 100vw;
      height: 100%;
      display: block;
      position: absolute;
      z-index: -1;
      animation: sidebar 0.5s ease-in;
    }
  }
`;

const NavBlogsLink = styled.a`
  text-decoration: none;
  padding: 20px;
  color: #ffffff;
  text-align: center;
  display: inline-block;
  font-size: 16px;

  &:hover:not(.icon) {
    transition: 0.5s;
    background-color: #008cbd;
    color: #ffffff;
  }

  @media only screen and (max-width: 768px) {
    text-align: left;
    display: block;
    padding: 20px 16px;

    &:hover:is(.icon) {
      color: #ffffff !important;
      background-color: transparent !important;
    }

    .times {
      border-radius: 7px;
      border: 1px solid #444444;
      padding: 5px 10px;

      &:hover {
        color: #ffffff;
      }
    }
  }
`;

const NavTogglerBlogs = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #ffffff;
  display: none;

  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 768px) {
    display: inline-block;
  }
`;

export {
  NavBlogs,
  NavbarBlogs,
  NavBlogsLink,
  NavBlogsBrand,
  NavTogglerBlogs,
  NavBlogsMenu,
};
