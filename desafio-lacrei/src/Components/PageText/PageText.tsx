import React from "react";
import { StyledPageText } from "./styles";

const PageText: React.FC<{ text: string; className?: string }> = ({text, className}) => {
  return (
    <StyledPageText className={className}>
      {text}
    </StyledPageText>
  );
};

export default PageText;