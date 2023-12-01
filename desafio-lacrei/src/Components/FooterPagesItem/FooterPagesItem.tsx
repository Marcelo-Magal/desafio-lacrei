import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { StyledFooterPagesItem } from "./styles";

const FooterPagesItem: React.FC<{ text: string, to: string }> = ({ text, to }) => {
  const location = useLocation(); 
  const isActive = location.pathname === to;
  
  return (  
    <StyledFooterPagesItem isActive={isActive}> 
        <li><Link className="footer-item" to={to}>{text}</Link></li>
    </StyledFooterPagesItem>
  );
};

export default FooterPagesItem;