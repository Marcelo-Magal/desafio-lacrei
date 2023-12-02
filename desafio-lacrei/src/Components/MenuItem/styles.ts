import styled from "styled-components";

export const StyledItem = styled.li<{ $isActive: boolean }>`
  // Cria um componente estilizado baseado na tag 'li' (list item) do HTML.
  // Este componente aceita uma propriedade 'isActive' do tipo booleano.
  list-style: none;

  .menu-item {
    width: 8.75rem;
    color: ${(props) => (props.$isActive ? "#018762" : "#1F1F1F")};
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
  }
`;
