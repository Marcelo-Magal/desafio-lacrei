import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { act } from "react-dom/test-utils"; 

import Button from "./Button";
import Home from "../../Pages/Home/Home";
import Professional from "../../Pages/Professional/Professional";
import UserPerson from "../../Pages/UserPerson/UserPerson";

expect.extend(toHaveNoViolations);

describe("Button", () => {
  // Teste 1: Deve renderizar o texto do botão corretamente
  it("deve renderizar o texto do botão corretamente", () => {
    render(
      <MemoryRouter>
        <Button to="/example" text="Click Me" />
      </MemoryRouter>
    );
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  // Teste 2: Deve aplicar a classe fornecida ao botão
  it("deve aplicar a classe fornecida ao botão", () => {
    const className = "test-class";
    render(
      <MemoryRouter>
        <Button to="/example" text="Click Me" className={className} />
      </MemoryRouter>
    );
    expect(screen.getByText("Click Me")).toHaveClass(className);
  });

  // Teste 3: Deve usar a prop 'to' como destino do link
  it("deve usar a prop 'to' como destino do link", () => {
    render(
      <MemoryRouter>
        <Button to="/example" text="Click Me" />
      </MemoryRouter>
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/example");
  });

  // Teste 4: Deve navegar para UserPerson quando o botão correspondente é clicado
  it("deve navegar para UserPerson quando o botão correspondente é clicado", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Professional" element={<Professional />} />
          <Route path="/UserPerson" element={<UserPerson />} />
        </Routes>
      </MemoryRouter>
    );

    const buttonUser = screen.getByText("Pessoa Usuária");
    await act(async () => {
      userEvent.click(buttonUser);
    });
    expect(
      screen.getByText(
        "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
      )
    ).toBeInTheDocument();
  });

  // Teste 5: Deve navegar para Professional quando o botão correspondente é clicado
  it("deve navegar para Professional quando o botão correspondente é clicado", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Professional" element={<Professional />} />
          <Route path="/UserPerson" element={<UserPerson />} />
        </Routes>
      </MemoryRouter>
    );

    const buttonProfessional = screen.getByText("Profissional");
    await act(async () => {
      userEvent.click(buttonProfessional);
    });
    expect(
      screen.getByText(
        "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora"
      )
    ).toBeInTheDocument();
  });

  // Teste 6: Deve aplicar estilos padrão
  it("deve aplicar estilos padrão", () => {
    render(
      <MemoryRouter>
        <Button to="/exemplo" text="Clique Aqui" className="classe-teste" />
      </MemoryRouter>
    );
    const button = screen.getByText("Clique Aqui");
    expect(button).toHaveStyle(`
        width: 12rem;
        height: 3rem;
        flex-shrink: 0;
        padding: 0.625rem 1rem;
        border: 2px solid rgb(1, 135, 98);
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
        transition: all 0.2s ease 0s;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.125rem;
        font-weight: 700;
    `);
  });

  // Teste 7: Deve ser acessível
  it("deve ser acessível", async () => {
    const { container } = render(
      <MemoryRouter>
        <Button to="/example" text="Accessible Button" />
      </MemoryRouter>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
