import React from "react";
import { Link } from "react-router-dom";
import { StyledLogo } from "./styles";

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <Link className="logo" to="/">
        Lacrei
      </Link>
    </StyledLogo>
  );
};

export default Logo;
