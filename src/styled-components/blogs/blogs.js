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
  width: 100%;
  text-align: center;
  justify-content: center;
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

const arrowPosition = (arrow, left, right, top, bottom) => {
  switch (arrow) {
    case "left":
      return `
      right: ${right};
      top: ${top};
      `;
    case "right":
      return `
      left: ${left};
      margin-left: 100%;
      bottom: ${bottom};
      `;
    default:
      return;
  }
};

const Circle = styled.button`
  outline: none;
  width: 20px;
  height: 20px;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid #b0acaa;
  color: #b0acaa;
  text-align: center;
  position: relative;

  ${({ arrow }) => arrowPosition(arrow, "15px", "53%", "146px", "55px")}

  &:focus {
    outline: none;
  }

  svg {
    position: relative;
    bottom: 11px;
    ${({ arrow }) => {
      switch (arrow) {
        case "left":
          return `left: -5px;`;
        case "right":
          return `left: -3px;`;
        default:
          return;
      }
    }}
  }

  @media only screen and (max-width: 768px) {
    ${({ arrow }) => arrowPosition(arrow, "12px", "59%", "146px", "53px")}
  }
`;

export { WrapperBestArticle, CardBaseArticle, CardContent, Circle };
