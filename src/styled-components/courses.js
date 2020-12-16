import { Jumbotron, Row } from "reactstrap";
import styled from "styled-components";

const WrapperCourses = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 40px;
    color: #ffffff;
    b {
      color: #e48800;
    }
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #efefef;
    width: 80%;
    margin: auto;
  }

  Button {
    margin-right: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 400px;
    h1 {
      font-size: 30px;
    }

    .button {
      margin-right: 40px;
      width: 100%;
    }

    Button {
      margin-right: 0px !important;
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const JumbotronCourses = styled(Jumbotron)`
  position: relative;
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#F4F5F6"};
  font-family: "Raleway", sans-serif;

  .side-title {
    width: 300px;
    font-size: 28px;
    font-family: "Raleway", sans-serif;
    b {
      color: #e48800;
    }
  }

  .feature {
    width: 100%;
  }

  .subtitle {
    font-size: 16px;
    line-height: 40px;
  }

  .review {
    font-size: 38px;
    line-height: 30px;
  }

  .report {
    font-size: 24px;
  }

  @media only screen and (min-width: 768px) {
    .learn-more {
      padding-left: 10rem;
    }
  }
`;

const CourseProgramming = styled(Row)`
  font-family: "Raleway", sans-serif;

  @media only screen and (min-width: 768px) {
    .context {
      padding-top: 100px;
      h2 {
        font-size: 26px;
        font-weight: bold;
        width: 500px;
      }

      p {
        line-height: 25px;
      }

      p:not(:first-child) {
        margin-top: 30px;
      }
    }

    .context-image {
      img {
        height: 550px;
        width: 700px;
      }
    }
  }
`;

const StartLearning = styled(Jumbotron)`
  background: linear-gradient(
    110deg,
    rgba(19, 126, 200, 1) 0%,
    rgba(43, 164, 182, 1) 57%,
    rgba(52, 179, 174, 1) 100%
  );
`;

const LearnMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Raleway", sans-serif;

  div {
    margin-bottom: 6px;
  }
  h2 {
    color: #e48800;
    font-size: 18px;
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export {
  WrapperCourses,
  JumbotronCourses,
  CourseProgramming,
  StartLearning,
  LearnMore,
};
