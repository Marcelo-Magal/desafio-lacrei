import React from "react";
import { Link} from 'react-router-dom';
import { StyledPageButton } from "./styles";

const PageButton: React.FC<{ text: string; to: string; className?: string }> = ({text, to, className}) => {

  return (
    <StyledPageButton className={className}>
      <Link to={to}>{text}</Link>
    </StyledPageButton>
  );
};

export default PageButton;
