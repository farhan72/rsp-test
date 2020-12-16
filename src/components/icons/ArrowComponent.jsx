import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Circle } from "../../styled-components/blogs/blogs";

export const PrevArrowComponent = ({ onClick }) => {
  return (
    <Circle arrow="left" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Circle>
  );
};

export const NextArrowComponent = ({ onClick }) => {
  return (
    <Circle onClick={onClick} arrow="right">
      <FontAwesomeIcon icon={faChevronRight} />
    </Circle>
  );
};
