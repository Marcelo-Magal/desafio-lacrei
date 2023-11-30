import React from "react";
import { StyledHeader } from "./styles";
import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
