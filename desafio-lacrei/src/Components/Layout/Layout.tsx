import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageContainer from "../PageContainer/PageContainer";
import { StyledLayout } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
