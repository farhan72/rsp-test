import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { BannerComponent } from "../../components/BannerComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { LoaderComponent } from "../../components/LoaderComponent";
import NavbarComponent from "../../components/NavbarComponent";
import HomeContainer from "./HomeContainer";
import CoursesContainer from "./CoursesContainer";

function Index() {
  return (
    <div style={{ height: "100%" }}>
      <NavbarComponent />
      <BannerComponent
        heroImage={require("../../img/banner/hero-homepage.jpg").default}
      />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Suspense fallback={<LoaderComponent show={true} />}>
              <HomeContainer {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/courses"
          exact
          render={(props) => (
            <Suspense fallback={<LoaderComponent show={true} />}>
              <CoursesContainer {...props} />
            </Suspense>
          )}
        />
      </Switch>
      <FooterComponent />
    </div>
  );
}
export default withRouter(Index);
