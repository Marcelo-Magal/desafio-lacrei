import React from "react";
import { StyledButtonContainer } from "../ButtonContainer/styles";

interface ButtonContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  className,
}) => {
  return (
    <StyledButtonContainer className={className}>
      {children}
    </StyledButtonContainer>
  );
};

export default ButtonContainer;
