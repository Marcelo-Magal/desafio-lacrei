import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPageButton = styled(Link)`
  width: 12rem;
  height: 3rem;
  flex-shrink: 0;

  padding: 0.625rem 2.75Srem;
  border: 2px solid rgb(1, 135, 98);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  transition: all 0.2s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.8rem 2.01rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  transition: all 0.2s ease 0s;
  text-decoration: none;
  background-color: transparent;

  a {
    color: inherit; // Herda a cor do botão
    text-decoration: none; // Remove sublinhado
    width: 100%; // Ocupa todo o botão
    height: 100%; // Ocupa todo o botão
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;