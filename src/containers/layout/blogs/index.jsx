import { Switch } from "antd";
import React from "react";
import { Route } from "react-router-dom";
import NavbarBlogsComponent from "../../../components/blogs/NavbarBlogsComponent";
import { BlogsContainer } from "./BlogsContainer";

const Index = () => {
  return (
    <>
      <NavbarBlogsComponent />
      <Route path="/" component={BlogsContainer} />
    </>
  );
};
export default Index;
