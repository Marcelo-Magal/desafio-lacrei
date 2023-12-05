import React from "react";
import FooterPagesItem from "../FooterPagesItem/FooterPagesItem";
import { StyledFotterPages } from "./styles";

const FooterPages: React.FC = () => {
  return (
    <StyledFotterPages>
      <FooterPagesItem text="Home" to="/" className="footer-pages-item" />
      <FooterPagesItem
        text="Pessoa Usuária"
        to="/UserPerson"
        className="footer-pages-item"
      />
      <FooterPagesItem
        text="Profissional"
        to="/Professional"
        className="footer-pages-item"
      />
    </StyledFotterPages>
  );
};

export default FooterPages;
