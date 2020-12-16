import React from "react";
import { Hero } from "../styled-components/banner";

export const BannerComponent = ({ heroImage, children }) => {
  return (
    <Hero imgUrl={heroImage} fluid>
      {children}
    </Hero>
  );
};
