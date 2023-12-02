import styled from "styled-components";

export const StyledUserPerson = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem 4rem 0 4rem;

  .pessoa-text {
    display: flex;
    width: 21.31rem;
    height: 4.06rem;
    font-size: 3rem;
    line-height: 2.063rem;
    color: #1f1f1f;
    margin-top: 2rem;
    flex-basis: 100%;
  }

  .atendimento-text {
    display: flex;
    width: 32.56rem;
    height: 8.25rem;
    font-size: 1.5rem;
    color: #515151;
    margin-top: 2rem;
    border-left: 5px solid rgb(1, 135, 98);
    padding-left: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
