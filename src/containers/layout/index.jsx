import React from "react";
import { BannerComponent } from "../../components/BannerComponent";
import { FooterComponent } from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";

export default function index() {
  console.log();
  return (
    <div style={{ height: "100%" }}>
      <NavbarComponent />
      <BannerComponent
        heroImage={require("../../img/banner/hero-homepage.jpg").default}
      />
      <FooterComponent />
    </div>
  );
}
