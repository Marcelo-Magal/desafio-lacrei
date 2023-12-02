import React from 'react';
import { StyledButtonContainer } from "../ButtonContainer/styles";

interface ButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({children}) => {
  return (
    <StyledButtonContainer>
      {children}
    </StyledButtonContainer>
  );
};

export default ButtonContainer;
