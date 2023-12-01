import styled from "styled-components";

export const StyledHeader = styled.header`
  
  display: flex;
align-items: center;
justify-content:space-between;

  width: 100vw;
  height: 3.75rem;
  

  
  background: #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  //display: inline-block;
  //position: absolute;
  //justify-content: flex-end;
  //display: flex;

  /* Estilos para tablets (tela média), acima de 768px */
@media (min-width: 768px) {
  .header {
    width: 50%;
    padding: 15px;
    font-size: 1.2rem;
  }
}

/* Estilos para desktops (tela grande), acima de 1024px */
@media (min-width: 1024px) {
  .header {
    width: 33.3333%;
    padding: 20px;
    font-size: 1.4rem;
  }
}
`;
