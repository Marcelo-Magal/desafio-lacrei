import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { StyledFooterSocial } from "./styles";

const FooterSocial: React.FC<{ text: string, to: string }> = ({ text, to }) => {
   
  return (  
    <StyledFooterSocial> 
        <li><a className="footer-social" href={to} target="_blank" rel="noopener noreferrer">{text}</a></li>
    </StyledFooterSocial>
  );
};

export default FooterSocial;
