import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100vw;
    height: 9.88rem;
    background-color: #FFF;
    
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