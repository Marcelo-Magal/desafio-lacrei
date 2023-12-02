import React from 'react';
import { StyledPageButton } from './styles'; // Ajuste o caminho conforme necessário

interface PageButtonProps {
  to: string;
  text: string;
  className?: string;
}

const PageButton: React.FC<PageButtonProps> = ({ text, to, className }) => {
  return (
    <StyledPageButton to={to} className={className}>
      {text}
    </StyledPageButton>
  );
};

export default PageButton;
