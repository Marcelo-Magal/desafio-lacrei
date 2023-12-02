import React, { ReactNode } from 'react';
import { StyledButtonContainer } from "../ButtonContainer/styles";
import PageButton from '../PageButton/PageButton';

interface ButtonContainerProps {
  children: ReactNode;
}

const ButtonContainer: React.FC = () => {
  return (
    <StyledButtonContainer>
      <PageButton className='button-pessoa' to ="/UserPerson" text='Pessoa Usuária'/>
      <PageButton className='button-profissional' to ="/Professional" text='Profissional'/>
    </StyledButtonContainer>
  );
};

export default ButtonContainer;
