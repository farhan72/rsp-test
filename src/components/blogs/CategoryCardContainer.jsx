import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "../../css/blogs/card.css";

export const CategoryCardContainer = ({ blog }) => {
  return (
    <>
      <Card>
        <div className="inner">
          <CardImg top width="100%" src={blog.imageUrl} alt="Card image cap" />
        </div>
        <CardBody className="pl-0">
          <CardSubtitle tag="h6" className="mb-2">
            {blog.category}
          </CardSubtitle>
          <CardTitle tag="h2">{blog.content}</CardTitle>
          <CardText className="text-muted">{blog.description}</CardText>
          <a href="">baca artikel</a>
        </CardBody>
      </Card>
    </>
  );
};
