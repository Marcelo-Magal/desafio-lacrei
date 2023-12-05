import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonContainer from "./ButtonContainer";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("ButtonContainer", () => {
  // Teste 1: de renderização de filhos
  it("renderiza os filhos corretamente", () => {
    render(
      <ButtonContainer>
        <button>Test Button</button>
      </ButtonContainer>
    );
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  // Teste 2: da aplicação de classe CSS
  it("aplica a classe fornecida ao contêiner", () => {
    const className = "test-class";
    render(
      <ButtonContainer className={className}>
        <button>Test Button</button>
      </ButtonContainer>
    );
    expect(screen.getByText("Test Button").parentElement).toHaveClass(className);
  });

  // Teste 3: dos estilos aplicados
  it("aplica estilos padrão e individuais dos botões", () => {
    render(
      <ButtonContainer>
        <button className="button-pessoa">First Button</button>
        <button className="button-profissional">Second Button</button>
      </ButtonContainer>
    );

    const firstButton = screen.getByRole("button", { name: "First Button" });
    expect(firstButton).toHaveStyle(`
    background-color: #018762;
    color: #fff;
    `);

    const secondButton = screen.getByRole("button", { name: "Second Button" });
    expect(secondButton).toHaveStyle(`
    background-color: #fff;
    color: #018762;
    `);
  });

  // Teste 4: de renderização de múltiplos filhos
  it("renderiza múltiplos filhos corretamente", () => {
    render(
      <ButtonContainer>
        <button>First Button</button>
        <button>Second Button</button>
      </ButtonContainer>
    );
    expect(screen.getByText("First Button")).toBeInTheDocument();
    expect(screen.getByText("Second Button")).toBeInTheDocument();
  });

  // Teste 5: de acessibilidade
  it("é acessível", async () => {
    const { container } = render(
      <ButtonContainer>
        <button>Accessible Button</button>
      </ButtonContainer>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
