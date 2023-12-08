import styled from "styled-components";

export const StyledFotterPages = styled.nav`
  display: flex;
  gap: 2.5rem;
  box-sizing: border-box;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 0.25rem;
}

  .footer-pages-item {
    color: #646464;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
