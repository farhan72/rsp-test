import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "../../css/blogs/card.css";

export const CategoryCardComponent = ({ blog }) => {
  return (
    <>
      <Card>
        <div className="inner">
          <CardImg top width="100%" src={blog.imageUrl} alt={blog.category} />
        </div>
        <CardBody className="pl-0">
          <CardSubtitle tag="h6" className="mb-2">
            {blog.category}
          </CardSubtitle>
          <CardTitle tag="h2">{blog.content}</CardTitle>
          <CardText className="text-muted">{blog.description}</CardText>
          <Link to={"/post/" + blog.content.replace(/ /g, "-").toLowerCase()}>
            <a href="!#">baca artikel</a>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};
