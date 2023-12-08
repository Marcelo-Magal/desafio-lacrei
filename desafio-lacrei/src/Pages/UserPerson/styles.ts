import styled from "styled-components";

export const StyledUserPerson = styled.main`
width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  padding: 4rem;
  align-items: flex-start;

  .pessoa-text {
    display: block;
    width: 21.31rem;
    width: 100%;
    font-size: 3rem;
    line-height: 2.063rem;
    margin-top: 2rem;
    flex-basis: 100%;
    @media (max-width: 1040px) {
      font-size: 2rem;
    }

    @media (max-width: 520px) {
      font-size: 1.5rem;
    }
  }

  .atendimento-text {
    display: block;
    max-width: 32.56rem;
    width: 100%;
    font-size: 1.5rem;
    color: #515151;
    margin-top: 2rem;
    border-left: 5px solid rgb(1, 135, 98);
    padding-left: 2rem;
    @media (max-width: 1040px) {
      line-height: 1.5rem;
      margin-top: 1rem;
      font-size: 1rem;
    }

    @media (max-width: 520px) {
      line-height: 1.25rem;
      margin-top: 0.875rem;
      font-size: 0.875rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1040px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  @media (max-width: 520px) {
    padding: 1rem;
  }
`;
