const { default: styled } = require("styled-components");

const FormLogin = styled.div`
  padding: 60px;
  Form {
    margin: auto;
    max-width: 320px;
  }
`;

const InputGroup = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;

export { FormLogin, InputGroup };
