import styled from "styled-components";

export const StyledPageContainer = styled.main`
    
    width: 85.375rem;
    min-height: 31.31rem;
    background: yellow;
    display: flex;

    .page-container {
        position: relative; /* O container deve ser relativo */

    }

    .page-container > :last-child {
  position: absolute;
  bottom: 0; /* Alinha na parte inferior do container */
}
      
`;