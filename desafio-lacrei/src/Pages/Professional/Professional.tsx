import React from 'react';
import { StyledProfessional } from './styles'
import Text from '../../Components/Text/Text';
import ProfImage from '../../Assets/img/ProfImage.svg'

const Professional: React.FC = () => {
  return (
    <StyledProfessional>
      <Text text='Professional' className='prof-text'/>
      <Text text='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora' className='recrutar-text'/>
      <img src={ProfImage}/>
    </StyledProfessional>
  );
};

export default Professional;