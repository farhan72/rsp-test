import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  CopyRight,
  Segment,
  Socmed,
  WrapperJumbotron,
} from "../styled-components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const FooterComponent = () => {
  return (
    <div>
      <WrapperJumbotron>
        <Container>
          <Row>
            <Segment md={3} xs={6} sm={6}>
              <h2>Site Map</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Bootcamp</Link>
                </li>
                <li>
                  <Link to="/">Software Development</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/custom-trainings">Custom Trainings</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </Segment>
            <Segment md={3} xs={6} sm={6}>
              <h2>Company</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/">Career</Link>{" "}
                  <span className="badge badge-secondary">We're Hiring</span>
                </li>
                <li>
                  <Link to="/">Press Kit</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </Segment>
            <Segment md={3} xs={6} sm={6}>
              <h2>Connect</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="https://facebook.com/refactoryid">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/refactory.id/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/refactory">Youtube</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/school/13270470/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </Segment>
            <Segment md={3} xs={6} sm={6}>
              <Socmed>
                <li>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faYoutube} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
              </Socmed>
              <Row className="mt-5">
                <Col md={6} sm={6}>
                  <h2>Company Address</h2>
                  <p>
                    Jln. Palagan Tentara Pelajar Km. 9,8 Ngaglik, Kab. Sleman DI
                    Yogyakarta 55581
                  </p>
                </Col>
                <Col md={6} sm={6} className="px-md-0">
                  <h2>Contact</h2>
                  <a href="mailto:marketing@refactory.id">
                    marketing@refactory.id
                  </a>
                  <br />
                  <a href="tel:+6281228203381">+62 8122 8203 381</a>
                  <br />
                  <br />
                  Dewita:{" "}
                  <a href="https://wa.me/6285725827222">0857 2582 7222</a>
                  <br />
                  Septin:{" "}
                  <a href="https://wa.me/6287820800206">0878 2080 0206</a>
                </Col>
              </Row>
            </Segment>
          </Row>
        </Container>
      </WrapperJumbotron>
      <CopyRight className="border-top border-secondary py-4">
        <Container>
          © 2020 Refactory - All Rights Reserved - Terms of Services / Privacy
          Policy
        </Container>
      </CopyRight>
    </div>
  );
};
