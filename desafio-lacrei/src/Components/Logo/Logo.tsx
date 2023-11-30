import React from "react";
import { Link } from 'react-router-dom';
import { StyledLogo } from "./styles";

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <h2><Link className="logo" to="/">Lacrei</Link></h2>
    </StyledLogo>
  );
};

export default Logo;