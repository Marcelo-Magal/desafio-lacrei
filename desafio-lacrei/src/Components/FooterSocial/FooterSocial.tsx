// FooterSocial.tsx
import React from 'react';
import FooterSocialItem from '../FooterSocialItem/FooterSocialItem';
import { StyledFooterSocial } from './styles';
import FacebookIcon from '../../Assets/img/FacebookLogo.svg';
import InstagramIcon from '../../Assets/img/InstagramLogo.svg';
import LinkedInIcon from '../../Assets/img/LinkedinLogo.svg';

const FooterSocial: React.FC = () => {
  return (
    <StyledFooterSocial>
      <FooterSocialItem
        icon={<img src={FacebookIcon} alt="Facebook" />}
        to="https://www.facebook.com/lacrei.saude"
      />
      <FooterSocialItem
        icon={<img src={InstagramIcon} alt="Instagram" />}
        to="https://www.instagram.com/lacrei.saude/"
      />
      <FooterSocialItem
        icon={<img src={LinkedInIcon} alt="LinkedIn" />}
        to="https://www.linkedin.com/company/lacrei/"
      />
    </StyledFooterSocial>
  );
};

export default FooterSocial;

