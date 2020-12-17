import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { WrapperIcon } from "../styled-components/icon-floating";

export const WhatsAppComponent = () => {
  return (
    <WrapperIcon
      href="https://web.whatsapp.com/send?phone=6281228203381&text=Halo team Refactory. Saya memiliki beberapa pertanyaan, apakah bisa di bantu?"
      target="_blank"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </WrapperIcon>
  );
};
