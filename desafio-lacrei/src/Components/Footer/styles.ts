import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid rgb(176, 224, 211);
  width: 90vw;
  height: 9.88rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0.5rem 0;
  margin: 0 4rem; /* Centraliza horizontalmente */
  justify-content: space-between;
  align-items: space-between;

  @media (max-width: 1040px) {
    margin: 0px 2rem;
  }
  @media (max-width: 520px) {
    margin: 0px 1rem;
    padding-top: 1rem;
  }
`;
