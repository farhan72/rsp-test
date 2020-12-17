import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Jumbotron,
  Row,
} from "reactstrap";
import { PostDescriptionComponent } from "../../../components/blogs/PostDescriptionComponent";
import { RightSectionUsComponent } from "../../../components/blogs/RightSectionUsComponent";
import {
  CardGoodArticle,
  TitleLine,
} from "../../../styled-components/blogs/blog-details";
import "../../../css/blogs/card.css";
import { TrainingMaterialComponent } from "../../../components/blogs/TrainingMaterialComponent";
import { getTrainingMaterials } from "../../../api/services/blogService";
import { TagComponent } from "../../../components/blogs/TagComponent";

export default function BlogDetailContainer() {
  const [materials, setMaterials] = useState([]);
  const relatedArticles = [
    {
      image:
        "https://i0.wp.com/refactory.id/wp-content/uploads/2020/02/048-Refactory-ApaYangBaruDiLaravel5.5-011.png?fit=768%2C403&ssl=1",
      type: "engineering",
      title: "Apa Yang Baru Di Laravel 5.5",
    },
    {
      image:
        "https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/054-Refactory-PenggunaanReduxUntukReactNative011-01.jpg?fit=768%2C403&ssl=1",
      type: "engineering",
      title: "Penggunaan Redux Untuk React Native",
    },
  ];

  useEffect(() => {
    getTrainingMaterials()
      .then((result) => setMaterials(result.data.data))
      .catch((error) => alert(error.response.data));
  }, []);
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col md={8} className="col-ipad-12 mb-0">
              <PostDescriptionComponent />
            </Col>
            <Col md={4}>
              <RightSectionUsComponent />
              <TrainingMaterialComponent materials={materials} />
              <TagComponent />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="my-0">
        <Container>
          <TitleLine>artikel terkait</TitleLine>
          <CardGoodArticle className="px-3">
            <h5 className="mt-3">
              Lihat lebih banyak artikel bagus dari kategori ini!
            </h5>
            <Row className="pt-4">
              {relatedArticles.map((item, i) => (
                <Col md={4} sm={6} key={i}>
                  <Card>
                    <div className="inner">
                      <CardImg
                        top
                        width="100%"
                        loading="lazy"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    <CardBody className="pl-0">
                      <CardSubtitle tag="h6" className="mb-2">
                        {item.type}
                      </CardSubtitle>
                      <CardTitle tag="h5" className="mt-3">
                        {item.title}
                      </CardTitle>

                      <div className="mt-5">
                        <a href="!#">baca artikel</a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardGoodArticle>
        </Container>
      </Jumbotron>
    </>
  );
}
