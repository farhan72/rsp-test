import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "../css/card.css";

export const CardComponent = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <CardImg
          top
          width="100%"
          src={data.user.photo_url}
          alt={data.user.name}
        />
      </CardBody>
      <CardBody className="flex-fill">
        <CardTitle tag="h5" className="name">
          {data.user.name}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {data.user.from}
        </CardSubtitle>
        <CardTitle tag="h5" style={{ color: "#E48800" }} className="py-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <FontAwesomeIcon key={item} icon={faStar} />
          ))}
        </CardTitle>
        <div className="mt-4">
          <CardSubtitle tag="h6" className="mb-4 font-weight-bold">
            {data.title}
          </CardSubtitle>
          <CardText>{data.description}</CardText>
        </div>
      </CardBody>
    </Card>
  );
};
