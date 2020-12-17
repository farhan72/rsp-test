import React, { useEffect, useState } from "react";
import { Hero } from "../styled-components/banner";

export const BannerComponent = ({ heroImage, children }) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = heroImage;

    imageLoader.onload = () => setImageUrl(heroImage);
  }, [heroImage]);
  return (
    <Hero imgUrl={imageUrl} fluid>
      {children}
    </Hero>
  );
};
