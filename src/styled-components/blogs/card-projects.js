import { Card, CardBody } from "reactstrap";

const { default: styled } = require("styled-components");

const CardProject = styled(Card)`
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  padding-bottom: 30px;
`;

const CardImageContent = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  justify-content: center;
  align-items: center;
  animation: overlay 0.5s ease;
  text-transform: uppercase;

  a {
    color: #fff;
    font-size: 20px;
    font-weight: 400;

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

const CardImage = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center top;
  position: relative;
  height: 140px;
  background-size: contain;
  background-repeat: no-repeat;

  &:hover ${CardImageContent} {
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    background-size: cover;
  }
`;

const CardPojectBody = styled(CardBody)`
  text-align: center;
  .card-title {
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: #e48800;
  }
  .card-text {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-size: 12px;
  }
`;

const ButtonLoadMore = styled.button`
  outline: none;
  border: none;
  color: #e48800;
  margin-top: 10px;
  margin-left: ${({ ml }) => (ml ? "10px" : "0px")};
  border-radius: 20px;
  padding: 6px 40px;
  background-color: transparent;
  border: 1px solid #e48800;
  position: relative;
  top: 35px;
  left: 20%;
  transform: translateX(6%);

  &:hover {
    transition: all 0.5s ease;
    background-color: #e48800;
    color: #fff;
  }
`;

export {
  CardProject,
  CardImage,
  CardImageContent,
  CardPojectBody,
  ButtonLoadMore,
};
