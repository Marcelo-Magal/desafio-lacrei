import styled from "styled-components";

export const StyledFooterPagesItem = styled.nav<{ $isActive: boolean }>`
  &.footer-item-active .footer-pages-item {
    color: #1f1f1f;
  }
`;
