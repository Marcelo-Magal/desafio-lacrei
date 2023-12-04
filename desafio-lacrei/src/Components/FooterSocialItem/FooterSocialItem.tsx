// FooterSocialItem.tsx
import React from 'react';
import { StyledFooterSocialItem } from './styles';

interface FooterSocialItemProps {
  icon: React.ReactNode;
  to: string;
}

const FooterSocialItem: React.FC<FooterSocialItemProps> = ({ icon, to }) => {
  return (
    <StyledFooterSocialItem>
      <a href={to} target="_blank" rel="noopener noreferrer" className="footer-social">
        {icon}
      </a>
    </StyledFooterSocialItem>
  );
};

export default FooterSocialItem;

