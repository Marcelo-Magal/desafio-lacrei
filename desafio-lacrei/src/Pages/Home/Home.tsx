import React from "react";
import { StyledHome } from "./styles";
import Text from "../../Components/Text/Text";
import ButtonContainer from "../../Components/ButtonContainer/ButtonContainer";
import HomeImage from "../../Assets/img/HomeImage.svg";
import Button from "../../Components/Button/Button";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <div className="text-home-container">
        <Text className="text-boas-vindas text-h2" text="Boas vindas a Lacrei Saúde" />
        <Text
          className="text-plataforma"
          text="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        />
        <ButtonContainer className="buttons-container">
          <Button
            className="button-pessoa"
            to="/UserPerson"
            text="Pessoa Usuária"
          />
          <Button
            className="button-profissional"
            to="/Professional"
            text="Profissional"
          />
        </ButtonContainer>
      </div>
      <img className="img-home" src={HomeImage} alt="Imagem Inicial"/>
    </StyledHome>
  );
};

export default Home;
