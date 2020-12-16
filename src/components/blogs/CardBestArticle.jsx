import React, { useEffect, useState } from "react";
import { CardText } from "reactstrap";
import {
  CardBaseArticle,
  CardContent,
} from "../../styled-components/blogs/blogs";
import "../../css/slick.css";
import Slider from "react-slick";
import {
  NextArrowComponent,
  PrevArrowComponent,
} from "../icons/ArrowComponent";
import { getBestArticles } from "../../api/services/blogService";

export const CardBestArticle = (props) => {
  const [articles, setArticles] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    nextArrow: <NextArrowComponent {...props} />,
    prevArrow: <PrevArrowComponent {...props} />,
  };

  useEffect(() => {
    getBestArticles()
      .then((result) => setArticles(result.data.data))
      .catch((error) => alert(error.response.data));
  }, []);
  return (
    <Slider {...settings}>
      {articles?.map((article) => (
        <CardBaseArticle key={article.id} body imageurl={article.image}>
          <CardContent>
            <CardText tag="h3">
              <a href="!#">{article.description}</a>
            </CardText>
          </CardContent>
        </CardBaseArticle>
      ))}
    </Slider>
  );
};
