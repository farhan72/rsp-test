import { Jumbotron } from "reactstrap";
import styled from "styled-components";

const HomeJumbotron = styled(Jumbotron)`
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#F4F5F6"};

  h1,
  h2 {
    font-family: "Raleway", sans-serif;
    color: #0b162b;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 30px;
    color: #f1f1f1;
  }

  ${({ showbgimage }) => {
    if (showbgimage) {
      return `
          background-image: url('https://refactory.id/wp-content/uploads/2020/01/ripple-bg.png');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          `;
    }
  }}
`;

const KnowledgeWrapper = styled.div`
  h2,
  a {
    font-size: 18px;
  }
  .title {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 28px;
  }

  a {
    position: relative;
    top: 3rem;

    &:hover {
      transition: 0.5s;
      color: #e48800;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      top: 2rem;
    }
  }
`;

const AsSeeOnWrapper = styled.div`
  padding: 50px;
  background-color: #f4f5f6;

  img {
    filter: grayscale(100%);
    &:hover {
      transition: 0.5s;
      filter: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .column-image {
      margin-top: 2rem;
    }
  }
`;

const WrapperText = styled.div`
  width: 60%;
  padding-left: 30px;
  h1 {
    font-family: "Raleway", sans-serif !important;
    font-weight: 500;
    line-height: 50px;
    font-size: 48px;
    color: #fff;

    span {
      color: #e48800;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    line-height: 30px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 30px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
    }
  }
`;

const Button = styled.button`
  position: relative;
  outline: none;
  border: none;
  color: #fff;
  margin-top: 10px;
  margin-left: ${({ ml }) => (ml ? "10px" : "0px")};
  border-radius: 20px;
  padding: 6px 40px;
  width: ${(width) => (width ? width : "auto")};
  ${({ outline }) => {
    if (!outline) {
      return `
      background-color: #e48800;
        border: none;
      `;
    } else {
      return `
      background-color: transparent;
      border: 1px solid #e48800;
      `;
    }
  }};
  &:hover {
    transition: 0.5s;
    background-color: ${({ outline }) => (outline ? "#e48800" : "#f0940e")};
  }

  @media only screen and (max-width: 768px) {
    margin-left: 5px;
    margin-top: -3px;
    left: 6%;
    padding: 5px 30px;
  }
`;

const OurPartner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 75, 102, 0.4);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  div {
    img {
      width: 100%;
    }
    margin: auto 20px;
  }

  @media only screen and (max-width: 768px) {
    padding: 4px;
    div {
      margin: 0 10px;
    }
  }
`;

export {
  HomeJumbotron,
  KnowledgeWrapper,
  AsSeeOnWrapper,
  WrapperText,
  Button,
  OurPartner,
};
