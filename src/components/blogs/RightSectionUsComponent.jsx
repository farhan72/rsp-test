import React from "react";
import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Jumbotron,
} from "reactstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../../css/blogs/card.css";

export const RightSectionUsComponent = ({ articles }) => {
  const openUrl = (url) => window.open(url);
  return (
    <Row>
      <Col md={12} sm={12}></Col>
      <Col md={12} sm={12}>
        <Jumbotron className="bg-white">
          <h2 className="title-h2">HUBUNGKAN DENGAN KAMI</h2>
          <h2 className="heading-title">Ikuti refactory</h2>
          <ul className="list-group">
            <li
              onClick={() =>
                openUrl(
                  "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHP2fwlqQ6E-wAAAXZsvSmoSaPc5sXtqQZNV2UGpUSoyyC9C0NF6FYhOx7wb6N3rAiHF_BkiFnQNEbeHFGo28m3Mt-b9YoiqqyQWzgIZY3lvNaraX25uRQVNvxzmKwmp9C3wdM=&originalReferer=https://refactory.id/blog/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fschool%2F13270470%2F"
                )
              }
            >
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <span className="list-text">Linkedin</span>
            </li>
            <li onClick={() => openUrl("https://www.facebook.com/refactoryid")}>
              <div className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <span className="list-text">Facebook</span>
            </li>
            <li
              onClick={() => openUrl("https://www.instagram.com/refactory.id/")}
            >
              <div className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <span className="list-text">Instagram</span>
            </li>
            <li onClick={() => openUrl("https://www.youtube.com/c/refactory")}>
              <div className="icon">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <span className="list-text">Youtube</span>
            </li>
          </ul>
        </Jumbotron>
        <Jumbotron fluid className="bg-light">
          <h5 className="text-center title">ARTIKEL POPULER</h5>
          {articles?.map((article) => (
            <Card key={article.id}>
              <div className="inner">
                <CardImg
                  top
                  width="100%"
                  src={article.imageUrl}
                  alt="Card image cap"
                />
              </div>
              <CardBody className="px-0">
                <CardSubtitle tag="h6">{article.category}</CardSubtitle>
                <CardTitle tag="h5">{article.content}</CardTitle>
                <CardText>{article.description}</CardText>
                <a href="!#">baca artikel</a>
              </CardBody>
            </Card>
          ))}
          <div className="button-link text-center">
            <a href="!#" role="button">
              Artikel Lain <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </Jumbotron>
      </Col>
    </Row>
  );
};
