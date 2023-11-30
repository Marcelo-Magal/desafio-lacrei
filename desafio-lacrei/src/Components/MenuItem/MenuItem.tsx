import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { StyledItem } from "./styles";

const MenuItem: React.FC<{ text: string, to: string }> = ({ text, to }) => {
  const location = useLocation(); // Usa o hook useLocation para acessar informações sobre a rota atual.
  const isActive = location.pathname === to; // Verifica se a rota atual (pathname) é igual ao prop 'to' passado para o MenuItem.
  
  return (  // Retorna o JSX do componente. StyledItem é um componente estilizado que recebe a prop isActive.
    <StyledItem isActive={isActive}> 
        <li><Link className="menu-item" to={to}>{text}</Link></li>
    </StyledItem>
  );
};

export default MenuItem;
