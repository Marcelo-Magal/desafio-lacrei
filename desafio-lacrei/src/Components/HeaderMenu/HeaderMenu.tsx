import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { StyledList } from "./styles";

const HeaderMenu: React.FC = () => {
  return (
    <StyledList>
      <MenuItem text="Home" to="/" />
      <MenuItem text="Pessoa Usuária" to="/UserPerson" />
      <MenuItem text="Profissional" to="/Professional" />
    </StyledList>
  );
};

export default HeaderMenu;
