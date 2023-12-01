import React from "react";
import FooterPagesItem from "../FooterPagesItem/FooterPagesItem";
import { StyledFotterPages } from "./styles";

const FooterPages: React.FC = () => {
  return (
    <StyledFotterPages>
      <FooterPagesItem text="Home" to="/" />
      <FooterPagesItem text="Pessoa Usuária" to="/UserPerson" />
      <FooterPagesItem text="Profissional" to="/Professional" />
    </StyledFotterPages>
  );
};

export default FooterPages;