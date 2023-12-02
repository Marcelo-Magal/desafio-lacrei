import React from "react";
import { StyledFooter } from "./styles";
import FooterPages from "../FooterPages/FooterPages";
import FooterSocial from "../FooterSocial/FooterSocial";
import Rectangle from "../Rectangle/Rectangle";
import FooterText from "../FooterText/FooterText";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <FooterPages />
      <FooterSocial />
      <FooterText />
    </StyledFooter>
  );
};

export default Footer;

