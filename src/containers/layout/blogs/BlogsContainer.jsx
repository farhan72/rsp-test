import React, { useEffect, useState } from "react";
import { Col, Container, Jumbotron, Row } from "reactstrap";
import { getBlogs, getPopularArticle } from "../../../api/services/blogService";
import { CategoryCardContainer } from "../../../components/blogs/CategoryCardContainer";
import { RightSectionUsContainer } from "../../../components/blogs/RightSectionUsContainer";

export const BlogsContainer = () => {
  const [blogList, setBlogList] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => fetchDataBlogs(), []);
  useEffect(() => fetchPopularArticle(), []);

  const fetchDataBlogs = () => {
    getBlogs()
      .then((result) => setBlogList(result.data.data))
      .catch((error) => alert(error));
  };

  const fetchPopularArticle = () => {
    getPopularArticle()
      .then((result) => setArticles(result.data.data))
      .catch((error) => alert(error));
  };
  return (
    <Jumbotron fluid className="bg-white">
      <Container>
        <Row>
          <Col md={8} sm={8}>
            <Row>
              {blogList?.map((blog, i) => (
                <Col md={i === 0 ? 12 : 6} key={blog.id} className="mt-3 pt-3">
                  <CategoryCardContainer key={blog.id} blog={blog} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <RightSectionUsContainer articles={articles} />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
