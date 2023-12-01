import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  width: 90.6vw;
  height: 8.88rem;
  background-color: #FFF;
  margin-left: 4rem;
  
  border-top: 1px solid rgb(176, 224, 211);  
  
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

