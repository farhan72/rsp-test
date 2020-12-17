import styled from "styled-components";

const TitleLine = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #e48800;
  padding: 10px 15px 0px 20px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 4px;

  &::after {
    content: "";
    flex: 1;
    border-bottom: 1.5px solid #a0a0a0;
  }
  &::after {
    margin-right: 6.2em;
    margin-left: 2.25em;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 10px;
    letter-spacing: 2px;
    &::after {
      margin-right: -1em;
      margin-left: 0.75em;
    }
  }
`;

const CardGoodArticle = styled.div`
  h5 {
    font-family: "Raleway", sans-serif;
    color: #0b162b;
    font-family: "Raleway", Sans-serif;
    font-size: 18px;
    font-weight: bold;
  }

  .card {
    .inner {
      border-radius: 5px;
    }
  }
`;

const Tag = styled.p`
  margin-top: 15px;

  span {
    font-family: "Raleway", sans-serif;
    margin-right: 10px;

    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      color: #808080;

      &:hover {
        color: #a6a6a6;
      }
    }
  }
`;

export { TitleLine, CardGoodArticle, Tag };
