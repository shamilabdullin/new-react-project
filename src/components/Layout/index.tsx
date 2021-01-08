import React from "react";
import { StyledLayout, AppContent } from "./styles";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <StyledLayout>
      <AppHeader />
      <AppContent>{children}</AppContent>
      <AppFooter />
    </StyledLayout>
  );
};

export default Layout;
