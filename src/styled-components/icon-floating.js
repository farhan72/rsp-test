const { default: styled } = require("styled-components");

const WrapperIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  background-color: #0eb540;
  padding: 6px 15px;
  text-align: center;
  color: #fff;
  font-size: 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    color: #fff;
  }
`;

export { WrapperIcon };
