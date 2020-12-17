import React from "react";
import { Jumbotron } from "reactstrap";
import { Tag, TitleLine } from "../../styled-components/blogs/blog-details";

export const TagComponent = () => {
  const tags = [
    "DevOps",
    "Front end Developer",
    "Mobile Developer",
    "Otodidak",
    "Programmer",
  ];
  return (
    <Jumbotron className="bg-none pt-0 pl-0" fluid>
      <TitleLine className="pl-0" style={{ width: "26rem" }}>
        TAG
      </TitleLine>
      <Tag>
        {tags.map((tag, i) => (
          <span key={i}>
            <a href="!#" target="_blank">
              {tag}
            </a>
          </span>
        ))}
      </Tag>
    </Jumbotron>
  );
};
