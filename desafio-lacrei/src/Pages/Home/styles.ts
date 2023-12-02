import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem 4rem 0 4rem;

  .text-boas-vindas {
    display: flex;
    max-width: 28.31rem;
    width: 100%;
    font-size: 3rem;
    line-height: 4.063rem;
    min-width: 0;
  }

  .text-plataforma {
    display: flex;
    max-width: 28.31rem;
    width: 100%;
    font-size: 1.5rem;
    color: #515151;
    margin-top: 2rem;
    min-width: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .prof-text,
    .recrutar-text {
      font-size: 1.5rem;
      margin: 1rem;
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    .prof-text,
    .recrutar-text {
      font-size: 1.2rem;
      margin: 0.5rem;
      max-width: 100%;
    }
  }
`;
