import { Col } from "reactstrap";

const { default: styled } = require("styled-components");

const WrapperJumbotron = styled.div`
  bottom: 0;
  padding: 50px;
  background-color: #0c162a;
  width: 100%;
`;

const Segment = styled(Col)`
  color: #fff;
  padding-left: 0px;
  h2 {
    color: #fff;
    font-size: 14px;
  }

  ul {
    text-align: left;
    color: #fff;
  }
  p {
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #eaeaea;
    font-size: 12px;
    &:hover {
      transition: 0.5s;
      color: #e48800;
    }
  }
`;

const Socmed = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
    margin-right: 8px;
    margin-left: 0;
    padding: 4px;
    width: 30px;
    height: 30px;
    background-color: #35b4ae;
    border-radius: 50%;
    text-align: center;
  }
`;

const CopyRight = styled.div`
  background-color: #0c162a;
  color: #ffffff;
`;

export { WrapperJumbotron, Segment, Socmed, CopyRight };
