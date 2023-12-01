import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import PageContainer from '../Components/PageContainer/PageContainer';
import { StyledLayout } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <PageContainer>
        {children}
      </PageContainer>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
