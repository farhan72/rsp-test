import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { BannerComponent } from "../../components/BannerComponent";
import { FooterComponent } from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";
import HomeComponent from "./HomeComponent";

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
          path="/home"
          render={(props) => (
            <Suspense fallback={<p>Loading...</p>}>
              <HomeComponent {...props} />
            </Suspense>
          )}
        />
      </Switch>
      <FooterComponent />
    </div>
  );
}
