import React from "react";
import { Container } from "reactstrap";
import {
  Hero,
  Wrapper,
  WrapperText,
  Button,
  OurPartner,
} from "../styled-components/banner";

export const BannerComponent = ({ heroImage }) => {
  return (
    <Hero imgUrl={heroImage}>
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
      <OurPartner></OurPartner>
    </Hero>
  );
};
