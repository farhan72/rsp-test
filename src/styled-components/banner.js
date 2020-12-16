const { default: styled } = require("styled-components");

const Hero = styled.div`
  position: relative;
  background: linear-gradient(
      110deg,
      rgba(0, 37, 108, 0.6250875350140056) 0%,
      rgba(4, 172, 164, 0.5914740896358543) 100%
    ),
    url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

export { Hero, Wrapper };
