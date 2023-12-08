import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
  align-items: flex-start;

  .text-home-container {
    max-width: 34.68rem;
    width: 100%;
  }

  .text-boas-vindas {
    display: block;
    max-width: 28.31rem;
    width: 100%;
    font-size: 3rem;
    line-height: 4.063rem;
    flex-basis: 100%;

    @media (max-width: 1040px) {
      font-size: 2rem;
    }

    @media (max-width: 520px) {
      font-size: 1.5rem;
    }
  }

  .text-plataforma {
    display: block;
    max-width: 28.31rem;
    width: 100%;
    font-size: 1.5rem;
    color: #515151;
    margin-top: 2rem;
    min-width: 0;

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

  .img-home {
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
    .buttons-container {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  }
`;
