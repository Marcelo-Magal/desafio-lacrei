import styled from "styled-components";

export const StyledList = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: 1040px) {
    gap: 2rem;
  }
  @media (max-width: 520px) {
    gap: 1rem;
  }
`;
