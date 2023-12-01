import styled from "styled-components";

export const StyledPageContainer = styled.main`
    
    width: 100vw;
    min-height: 31.31rem;
    background: #FFF;
    display: flex;

    .page-container {
        position: relative; /* O container deve ser relativo */

    }

    .page-container > :last-child {
  position: absolute;
  bottom: 0; /* Alinha na parte inferior do container */
}
 
 /* Estilos para tablets (tela média), acima de 768px */
@media (min-width: 768px) {
  .main {
    width: 50%;
    padding: 15px;
    font-size: 1.2rem;
  }
}

/* Estilos para desktops (tela grande), acima de 1024px */
@media (min-width: 1024px) {
  .main {
    width: 33.3333%;
    padding: 20px;
    font-size: 1.4rem;
  }
}
`;