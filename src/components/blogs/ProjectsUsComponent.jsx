import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { CardText, CardTitle, Jumbotron } from "reactstrap";
import {
  ButtonLoadMore,
  CardImage,
  CardImageContent,
  CardPojectBody,
  CardProject,
} from "../../styled-components/blogs/card-projects";
import "../../css/slick.css";

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
const ProjectsUsComponent = ({ dataList }) => {
  return (
    <Jumbotron fluid className="h-100 px-0">
      <div className="pb-4">
        <h2 className="text-center" style={styles.title}>
          CASE STUDIES
        </h2>
      </div>
      <Slider {...settings}>
        {dataList?.map((data) => (
          <CardProject className="rounded bg-white" key={data.id}>
            <CardImage image={data.image}>
              <CardImageContent>
                <a href="!#">{data.nameProduct}</a>
              </CardImageContent>
            </CardImage>
            <CardPojectBody>
              <CardTitle tag="h6" className="mt-2">
                {data.nameProduct}
              </CardTitle>
              <CardText>{data.descProduct}</CardText>
            </CardPojectBody>
          </CardProject>
        ))}
      </Slider>

      <div>
        <ButtonLoadMore>
          Load More <FontAwesomeIcon icon={faArrowRight} />
        </ButtonLoadMore>
      </div>
    </Jumbotron>
  );
};

const styles = {
  title: {
    color: "#E48800",
    fontSize: 16,
  },
};

const mapStateToProps = (state) => ({
  dataList: state.postResult.projects,
});
export default connect(mapStateToProps)(ProjectsUsComponent);
