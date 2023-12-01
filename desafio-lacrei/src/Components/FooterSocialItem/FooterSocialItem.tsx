import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { StyledFooterSocialItem } from "./styles";

const FooterSocialItem: React.FC<{ text: string, to: string }> = ({ text, to }) => {
   
  return (  
    <StyledFooterSocialItem> 
        <li><a className="footer-social" href={to} target="_blank" rel="noopener noreferrer">{text}</a></li>
    </StyledFooterSocialItem>
  );
};

export default FooterSocialItem;