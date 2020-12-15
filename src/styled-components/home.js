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

export { HomeJumbotron, KnowledgeWrapper, AsSeeOnWrapper };
