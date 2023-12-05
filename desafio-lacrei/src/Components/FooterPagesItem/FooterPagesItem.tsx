import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledFooterPagesItem } from "./styles";

const FooterPagesItem: React.FC<{
  text: string;
  to: string;
  className?: string;
}> = ({ text, to, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  console.log("Caminho atual:", location.pathname); // Isto irá imprimir o caminho atual

  return (
    <StyledFooterPagesItem
      $isActive={isActive}
      className={isActive ? "footer-item-active" : ""}
    >
      <Link className={className} to={to}>
        {text}
      </Link>
    </StyledFooterPagesItem>
  );
};

export default FooterPagesItem;
