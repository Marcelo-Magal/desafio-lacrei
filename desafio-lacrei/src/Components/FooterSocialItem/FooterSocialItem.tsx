import React from "react";
import { StyledFooterSocialItem } from "./styles";
import FacebookIcon from '../../Assets/img/FacebookLogo.svg';
import InstagramIcon from '../../Assets/img/InstagramLogo.svg';
import LinkedInIcon from '../../Assets/img/LinkedinLogo.svg';

const FooterSocialItem: React.FC<{ name: string, to: string }> = ({ name, to }) => {
  
  const getSocialIcon = (name: string) => {
    switch(name) {
      case 'facebook':
        return <img src={FacebookIcon} alt="Facebook" />;
      case 'instagram':
        return <img src={InstagramIcon} alt="Instagram" />;
      case 'linkedin':
        return <img src={LinkedInIcon} alt="LinkedIn" />;
      default:
        return null;
    }
  };

  return (  
    <StyledFooterSocialItem> 
        
          <a className="footer-social" href={to} target="_blank" rel="noopener noreferrer">
            {getSocialIcon(name)}
          </a>
        
    </StyledFooterSocialItem>
  );
};

export default FooterSocialItem;
