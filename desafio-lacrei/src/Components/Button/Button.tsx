import React from "react";
import { StyledButton } from "./styles"; // Ajuste o caminho conforme necessário

interface ButtonProps {
  to: string;
  text: string;
  className?: string;
}

const PageButton: React.FC<ButtonProps> = ({ text, to, className }) => {
  return (
    <StyledButton to={to} className={className}>
      {text}
    </StyledButton>
  );
};

export default PageButton;
