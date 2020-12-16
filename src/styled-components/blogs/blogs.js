import { Card } from "reactstrap";
import styled from "styled-components";

const WrapperBestArticle = styled.div`
  font-family: "Raleway", sans-serif;

  h2 {
    font-size: 28px;
    font-weight: bold;
  }
`;

const CardContent = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  text-align: center;
  align-items: center;
  display: none;
  cursor: pointer;
  animation: overlay 0.5s ease;

  a {
    color: #fff;
    display: inline;
    transition: all 1s ease;

    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }

  @keyframes overlay {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CardBaseArticle = styled(Card)`
  background-image: url(${({ imageurl }) => imageurl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 160px;
  border-radius: 12px;
  overflow: hidden;

  &:hover ${CardContent} {
    display: flex;
  }
`;

export { WrapperBestArticle, CardBaseArticle, CardContent };
