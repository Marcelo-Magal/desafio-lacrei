import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  
  background: #eee;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  align-items: center;

  @media (max-width: 1040px) {
    padding: 0.5rem 2rem;
    align-items: center;
    justify-content: space-around; // Ajusta o espaçamento quando a tela é menor
  }

  @media (max-width: 520px) {
    padding: 0.5rem 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; // Ajusta o espaçamento quando a tela é menor
  }
`;
