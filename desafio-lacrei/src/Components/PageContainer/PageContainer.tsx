import React, { ReactNode } from 'react';
import { StyledPageContainer } from './styles';

type PageContainerProps = {
  children: ReactNode;
  className?: string; 
};

const PageContainer = ({ children, className }: PageContainerProps) => {
    return <StyledPageContainer className={className}>{children}</StyledPageContainer>;
  };

export default PageContainer;
