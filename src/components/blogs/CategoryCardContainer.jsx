import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

export const CategoryCardContainer = ({ blog }) => {
  return (
    <>
      <Card>
        <CardImg top width="100%" src={blog.imageUrl} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {blog.category}
          </CardSubtitle>
          <CardTitle tag="h5">{blog.content}</CardTitle>
          <CardText>{blog.description}</CardText>
          <a href="">baca article</a>
        </CardBody>
      </Card>
    </>
  );
};
