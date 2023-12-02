import React from "react";
import FooterSocialItem from "../FooterSocialItem/FooterSocialItem";
import { StyledFooterSocial } from "./styles";

const FooterSocial: React.FC = () => {
  return (
    <StyledFooterSocial>
      <FooterSocialItem
        name="facebook"
        to="https://www.facebook.com/lacrei.saude"
      />
      <FooterSocialItem
        name="instagram"
        to="https://www.instagram.com/lacrei.saude/"
      />
      <FooterSocialItem
        name="linkedin"
        to="https://www.linkedin.com/company/lacrei/"
      />
    </StyledFooterSocial>
  );
};

export default FooterSocial;
