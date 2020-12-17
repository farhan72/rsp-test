import React, { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "reactstrap";
import {
  AsSeeOnWrapper,
  HomeJumbotron,
  KnowledgeWrapper,
  Button,
  OurPartner,
  WrapperText,
} from "../../styled-components/home";
import { getAsSeeOn, getPartners } from "../../api/services/homeService";
import { BannerComponent } from "../../components/BannerComponent";
import { Wrapper } from "../../styled-components/banner";

export default function HomeContainer() {
  const [seeOnList, setSeeOnList] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getAsSeeOn()
      .then((result) => setSeeOnList(result.data.data))
      .catch((error) => alert(error.response.data));
  }, []);
  useEffect(() => getDataPartners(), []);
  const getDataPartners = () => {
    getPartners()
      .then((result) => setPartners(result.data.data))
      .catch((error) => alert(error.response.data));
  };
  return (
    <>
      <BannerComponent heroImage="https://refactory.id/wp-content/uploads/2020/01/hero-homepage.jpg">
        <Container className="my-auto">
          <Wrapper className="top-ipad-12">
            <WrapperText>
              <h1>
                Empowering <span>People</span> Through Programming
              </h1>
              <p>
                Refactory adalah perusahaan edukasi dan teknologi yang
                menyediakan layanan lengkap berupa <i>course</i> maupun{" "}
                <i>custom training</i> yang materinya dapat disesuaikan dengan
                kebutuhan teknologi dan bisnis perusahaan Anda.
              </p>
            </WrapperText>
            <div>
              <Button>Temukan Solusi Anda</Button>
              <Button ml outline>
                Tingkatkan Skill Anda
              </Button>
            </div>
          </Wrapper>
        </Container>
        <OurPartner>
          {partners?.map((partner) => (
            <div key={partner.id}>
              <img src={partner.photo_url} alt={partner.name} />
            </div>
          ))}
        </OurPartner>
      </BannerComponent>
      <HomeJumbotron transparent="true" fluid>
        <Container>
          <h1 className="text-center">Apa Yang Refactory Dapat Bantu?</h1>
          <Row className="justify-content-center text-center mt-5">
            <Col md={6} sm={12}>
              <img
                src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1"
                alt="memperkuat tim engineer anda"
                loading="lazy"
              />
              <h2 className="mt-2">Memperkuat Tim Engineer Anda</h2>
              <p className="text-muted">
                Bisnis di jaman modern membutuhkan keterampilan pengembangan
                terbaik untuk meningkatkan skala produk. Kami dapat
                mempersiapkan course dan juga dapat menyediakan tim yang
                menangani kebutuhan digital Anda.
              </p>
            </Col>
            <Col md={6} sm={12}>
              <img
                src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?fit=28%2C48&ssl=1"
                alt="wujudkan software impian anda"
                loading="lazy"
              />
              <h2 className="mt-2">Wujudkan Software Impian Anda</h2>
              <p className="text-muted">
                Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda,
                membantu di setiap tahap mulai dari menyusun ide, melalui desain
                dan pengembangan aplikasi seluler, situs web dan aplikasi
                desktop, hingga peluncuran produk.
              </p>
            </Col>
          </Row>
        </Container>
      </HomeJumbotron>
      <HomeJumbotron
        className="border-top border-light"
        showbgimage="true"
        fluid
        transparent="true"
      >
        <Container className="text-center">
          <KnowledgeWrapper>
            <h2 className="text-muted">INSIGHT TERBARU</h2>
            <h2 className="title">Knowledge Sharing</h2>
            <a href="/">
              Lihat Semua <FontAwesomeIcon icon={faArrowRight} />{" "}
            </a>
          </KnowledgeWrapper>
        </Container>
      </HomeJumbotron>
      <AsSeeOnWrapper>
        <Container className="text-center">
          <Row className="align-items-center justify-content-center">
            {seeOnList?.map((item) => (
              <Col
                className="column-image col-ipad-10"
                md={4}
                sm={6}
                key={item.id}
              >
                <a href={item.link_url}>
                  <img src={item.photo_url} alt="item.name" />
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </AsSeeOnWrapper>
    </>
  );
}
