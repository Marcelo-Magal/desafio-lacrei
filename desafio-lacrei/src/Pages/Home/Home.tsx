import React from "react";
import { StyledHome } from "./styles";
import Text from "../../Components/Text/Text";
import ButtonContainer from "../../Components/ButtonContainer/ButtonContainer";
import HomeImage from "../../Assets/img/HomeImage.svg";
import PageButton from "../../Components/PageButton/PageButton";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <div className="text-button-container">
        <Text className="text-boas-vindas" text="Boas vindas a Lacrei Saúde" />
        <Text
          className="text-plataforma"
          text="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        />
        <ButtonContainer className="button-container">
          <PageButton
            className="button-pessoa"
            to="/UserPerson"
            text="Pessoa Usuária"
          />
          <PageButton
            className="button-profissional"
            to="/Professional"
            text="Profissional"
          />
        </ButtonContainer>
      </div>
      <img src={HomeImage} />
    </StyledHome>
  );
};

export default Home;
