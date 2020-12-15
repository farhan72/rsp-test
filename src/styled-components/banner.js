const { default: styled } = require("styled-components");

const Hero = styled.div`
  position: relative;
  background: linear-gradient(
      110deg,
      rgba(0, 37, 108, 0.6250875350140056) 0%,
      rgba(4, 172, 164, 0.5914740896358543) 100%
    ),
    url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 635px;
  margin-top: -78px;

  @media only screen and (max-width: 768px) {
    height: 535px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 10rem;
  padding: 10px;
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
      font-size: 38px;
    }
  }
`;

const Button = styled.button`
  position: relative;
  outline: none;
  border: none;
  color: #fff;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 20px;
  padding: 6px 40px;
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

export { Hero, Wrapper, WrapperText, Button, OurPartner };
