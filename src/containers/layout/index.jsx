import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { FooterComponent } from "../../components/FooterComponent";
import { LoaderComponent } from "../../components/LoaderComponent";
import NavbarComponent from "../../components/NavbarComponent";
import HomeContainer from "./HomeContainer";
import CoursesContainer from "./CoursesContainer";
import BlogsContainer from "./blogs";

function Index() {
  return (
    <div style={{ height: "100%" }}>
      <NavbarComponent />
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
        <Route
          path="/blogs"
          exact
          render={(props) => (
            <Suspense fallback={<LoaderComponent show={true} />}>
              <BlogsContainer {...props} />
            </Suspense>
          )}
        />
      </Switch>
      <FooterComponent />
    </div>
  );
}
export default withRouter(Index);
