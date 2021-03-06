import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { FooterComponent } from "../../components/FooterComponent";
import { LoaderComponent } from "../../components/LoaderComponent";
import NavbarComponent from "../../components/NavbarComponent";
import HomeContainer from "./HomeContainer";
import CoursesContainer from "./CoursesContainer";
import Page from "./Page";
import { WhatsAppComponent } from "../../components/WhatsAppComponent";
import PageBlog from "./PageBlog";
import Blogs from "./blogs";
import BlogDetailContainer from "./blogs/BlogDetailContainer";

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
              <Page title="Home">
                <HomeContainer {...props} />
              </Page>
            </Suspense>
          )}
        />
        <Route
          path="/courses"
          exact
          render={(props) => (
            <Suspense fallback={<LoaderComponent show={true} />}>
              <Page title="Courses">
                <CoursesContainer {...props} />
              </Page>
            </Suspense>
          )}
        />
        <Route
          path="/blogs"
          exact
          render={(props) => (
            <Suspense fallback={<LoaderComponent show={true} />}>
              <Page title="Blog">
                <Blogs {...props} />
              </Page>
            </Suspense>
          )}
        />
        <Route
          path="/post/:prefix"
          exact
          render={(props) => (
            <Suspense fallback={<LoaderComponent show={true} />}>
              <PageBlog {...props}>
                <BlogDetailContainer />
              </PageBlog>
            </Suspense>
          )}
        />
      </Switch>
      <FooterComponent />
      <WhatsAppComponent />
    </div>
  );
}
export default withRouter(Index);
