import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { BannerComponent } from "../../components/BannerComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { LoaderComponent } from "../../components/LoaderComponent";
import NavbarComponent from "../../components/NavbarComponent";
import HomeContainer from "./HomeContainer";

export default function index() {
  console.log();
  return (
    <div style={{ height: "100%" }}>
      <NavbarComponent />
      <BannerComponent
        heroImage={require("../../img/banner/hero-homepage.jpg").default}
      />
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <Suspense fallback={<LoaderComponent show={true} />}>
              <HomeContainer {...props} />
            </Suspense>
          )}
        />
      </Switch>
      <FooterComponent />
    </div>
  );
}
