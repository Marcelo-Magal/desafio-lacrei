import React from 'react';
import { StyledUserPerson } from './styles'
import Text from '../../Components/Text/Text';
import PersonImage from '../../Assets/img/PersonImage.svg'

const UserPerson: React.FC = () => {
  return (
    <StyledUserPerson>
      <Text text='Pessoa Usuária' className='pessoa-text'/>
      <Text text='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.' className='atendimento-text'/>
      <img src={PersonImage}/>
    </StyledUserPerson>
  );
};

export default UserPerson;