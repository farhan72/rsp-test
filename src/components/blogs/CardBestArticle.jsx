import React from "react";
import { CardText } from "reactstrap";
import {
  CardBaseArticle,
  CardContent,
} from "../../styled-components/blogs/blogs";

export const CardBestArticle = () => {
  return (
    <CardBaseArticle
      body
      imageurl="https://i1.wp.com/refactory.id/wp-content/uploads/2020/02/052-Refactory-BatchIRefactoryJogjaBelumLulusBanjirTawaranKerja011.jpg?fit=560%2C420&ssl=1"
    >
      <CardContent>
        <CardText tag="h3">
          <a href="">Programmer Perempuan Juga Mampu Tahan Banting</a>
        </CardText>
      </CardContent>
    </CardBaseArticle>
  );
};
