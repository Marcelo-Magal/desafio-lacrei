import React from "react";
import FooterPages from "../FooterPages/FooterPages";
import { StyledFooterContainer } from "./styles";

const FooterContainer: React.FC = () => {
  return (
    
    <StyledFooterContainer className="footer-container">
      <FooterPages />
    </StyledFooterContainer>
    
  );
};

export default FooterContainer;