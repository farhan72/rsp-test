import React, { useEffect, useState } from "react";
import { Col, Container, Jumbotron, Row } from "reactstrap";
import { getBlogs, getPopularArticle } from "../../../api/services/blogService";
import { CardBestArticleComponent } from "../../../components/blogs/CardBestArticleComponent";
import { CategoryCardComponent } from "../../../components/blogs/CategoryCardComponent";
import { RightSectionUsComponent } from "../../../components/blogs/RightSectionUsComponent";
import { WrapperBestArticle } from "../../../styled-components/blogs/blogs";
import "../../../css/blogs/card.css";
import PostDataComponent from "../../../components/blogs/PostDataComponent";
import ProjectsUsComponent from "../../../components/blogs/ProjectsUsComponent";

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
    <>
      <Jumbotron fluid className="bg-white">
        <Container>
          <Row>
            <Col md={8} className="col-ipad-12">
              <Row>
                {blogList?.map((blog, i) => (
                  <Col
                    md={i === 0 ? 12 : 6}
                    key={blog.id}
                    className="mt-3 pt-3"
                  >
                    <CategoryCardComponent key={blog.id} blog={blog} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col>
              <RightSectionUsComponent articles={articles} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron fluid>
        <WrapperBestArticle className="text-center">
          <h2>Artikel Unggulan</h2>
          <CardBestArticleComponent />
        </WrapperBestArticle>
      </Jumbotron>
      <Jumbotron fluid className="bg-white pb-0">
        <Row>
          <Col md={8} sm={12} className="mt-md-4 col-ipad-12">
            <PostDataComponent />
          </Col>
          <Col md={3} sm="auto" className="col-ipad-12">
            <ProjectsUsComponent />
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};
