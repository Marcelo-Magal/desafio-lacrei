import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FooterPagesItem from "./FooterPagesItem";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("FooterPagesItem Component", () => {
  // Teste 1: Deve renderizar o texto corretamente
  it("deve renderizar o texto corretamente", () => {
    // Renderize o componente dentro de um MemoryRouter para simular o roteamento.
    const { getByText } = render(
      <MemoryRouter>
        <FooterPagesItem text="Exemplo" to="/pagina" />
      </MemoryRouter>
    );
    // Verifique se o texto do link foi renderizado corretamente.
    expect(getByText("Exemplo")).toBeInTheDocument();
  });

  // Teste 2: Deve aplicar a classe CSS correta quando ativo
  it("deve aplicar a classe CSS 'footer-item-active' quando estiver ativo", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/paginaAtual"]}>
        <FooterPagesItem text="Exemplo" to="/paginaAtual" />
      </MemoryRouter>
    );

    // Verifique se o componente possui a classe CSS 'footer-item-active' quando está ativo.
    const styledFooterItem = container.querySelector("nav");
    expect(styledFooterItem).toHaveClass("footer-item-active");
  });

  // Teste 3: Não deve aplicar a classe CSS quando inativo
  it("não deve aplicar a classe CSS 'footer-item-active' quando estiver inativo", () => {
    // Renderize o componente dentro de um MemoryRouter para simular o roteamento.
    const { getByText } = render(
      <MemoryRouter initialEntries={["/outraPagina"]}>
        <FooterPagesItem text="Exemplo" to="/outraPagina" />
      </MemoryRouter>
    );

    // Verifique se o link não possui a classe CSS 'footer-item-active' quando está inativo.
    const linkElement = getByText("Exemplo");
    expect(linkElement).not.toHaveClass("footer-item-active");
  });

  // Teste 4: Deve ser acessível
  it("deve ser acessível", async () => {
    // Renderiza o componente dentro de um MemoryRouter para simular o roteamento
    const { container } = render(
      <MemoryRouter>
        <FooterPagesItem text="Acessível" to="/pagina-acessivel" />
      </MemoryRouter>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
