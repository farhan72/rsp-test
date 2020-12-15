import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { getPartners } from "../api/services/homeService";
import {
  Hero,
  Wrapper,
  WrapperText,
  Button,
  OurPartner,
} from "../styled-components/banner";

export const BannerComponent = ({ heroImage }) => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getDataPartners();
  }, []);
  const getDataPartners = () => {
    getPartners()
      .then((result) => setPartners(result.data.data))
      .catch((error) => alert(error.response.data));
  };
  return (
    <Hero imgUrl={heroImage} fluid>
      <Container className="my-auto">
        <Wrapper>
          <WrapperText>
            <h1>
              Empowering <span>People</span> Through Programming
            </h1>
            <p>
              Refactory adalah perusahaan edukasi dan teknologi yang menyediakan
              layanan lengkap berupa <i>course</i> maupun <i>custom training</i>{" "}
              yang materinya dapat disesuaikan dengan kebutuhan teknologi dan
              bisnis perusahaan Anda.
            </p>
          </WrapperText>
          <div>
            <Button>Temukan Solusi Anda</Button>
            <Button outline>Tingkatkan Skill Anda</Button>
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
    </Hero>
  );
};
