import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import { CardText, CardTitle, Jumbotron } from "reactstrap";
import {
  ButtonLoadMore,
  CardImage,
  CardImageContent,
  CardPojectBody,
  CardProject,
} from "../../styled-components/blogs/card-projects";

const settings = {
  dots: true,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  arrows: false,
};
export const TrainingMaterialComponent = ({ materials }) => {
  return (
    <Jumbotron fluid className="bg-own-light px-0 pb-5">
      <h2 className="title-h2 text-center">CASE STUDIES</h2>
      <Slider {...settings}>
        {materials?.map((material) => (
          <CardProject className="rounded bg-white" key={material.id}>
            <CardImage image={material.image}>
              <CardImageContent>
                <a href="!#">{material.materialName}</a>
              </CardImageContent>
            </CardImage>
            <CardPojectBody>
              <CardTitle tag="h6" className="mt-2">
                {material.materialName}
              </CardTitle>
              <CardText>{material.descMaterial}</CardText>
            </CardPojectBody>
          </CardProject>
        ))}
      </Slider>

      <div className="d-flex justify-content-center">
        <ButtonLoadMore className="font-weight-bold">
          Load More <FontAwesomeIcon icon={faArrowRight} />
        </ButtonLoadMore>
      </div>
    </Jumbotron>
  );
};
