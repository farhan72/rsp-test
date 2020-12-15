import React from "react";
import { BannerComponent } from "../../components/BannerComponent";
import NavbarComponent from "../../components/NavbarComponent";

export default function index() {
  console.log();
  return (
    <div>
      <NavbarComponent />
      <BannerComponent
        heroImage={require("../../img/banner/hero-homepage.jpg").default}
      />
    </div>
  );
}
