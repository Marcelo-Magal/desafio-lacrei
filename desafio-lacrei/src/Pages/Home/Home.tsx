import React from 'react';
import { StyledHome } from './styles'
import PageText from '../../Components/Text/Text';
import ButtonContainer from '../../Components/ButtonContainer/ButtonContainer';
import HomeImage from '../../Assets/img/HomeImage.svg'
import PageButton from '../../Components/PageButton/PageButton';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <PageText className="text-boas-vindas" text="Boas vindas a Lacrei Saúde"/>
      <PageText className="text-plataforma" text="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"/>
      <ButtonContainer>
      <PageButton className='button-pessoa' to="/UserPerson" text="Pessoa Usuária" />
      <PageButton className='button-profissional' to="/Professional" text="Profissional" />
      </ButtonContainer>
      <img src={HomeImage}/>
    </StyledHome>
  );
};

export default Home;