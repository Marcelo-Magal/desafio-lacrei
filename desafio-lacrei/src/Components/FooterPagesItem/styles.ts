import styled from "styled-components"; // Cria um componente estilizado baseado na tag 'li' (list item) do HTML.
// Este componente aceita uma propriedade 'isActive' do tipo booleano.
export const StyledFooterPagesItem = styled.li<{ $isActive: boolean }>`
  .footer-item {
    color: ${(props) => (props.$isActive ? "#1F1F1F" : "#646464")};
    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: "Nunito", sans-serif;
  }
`;
