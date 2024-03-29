import React, { ReactNode } from "react";

import styled from "styled-components";

import "@/utils/i18n";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface ILayoutProps {
  children: ReactNode;
}

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  );
};
