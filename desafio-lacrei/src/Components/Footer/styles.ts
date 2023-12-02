import styled from "styled-components";

export const StyledFooter = styled.footer`
    border-top: 1px solid rgb(176, 224, 211);
  width: 90vw;
  height: 9.88rem;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0.5rem 0;
  margin: 0 4rem; /* Centraliza horizontalmente */
  justify-content: space-between;
  align-items: space-between;



    
    
/* Estilos para tablets (tela média), acima de 768px */
@media (min-width: 768px) {
  .footer {
    width: 50%;
    padding: 15px;
    font-size: 1.2rem;
  }
}

/* Estilos para desktops (tela grande), acima de 1024px */
@media (min-width: 1024px) {
  .fotter {
    width: 33.3333%;
    padding: 20px;
    font-size: 1.4rem;
  }
}
    

`;