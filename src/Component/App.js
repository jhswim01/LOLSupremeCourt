import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Header></Header>
    <ContentWrapper>
      <Content></Content>
    </ContentWrapper>
    <Footer></Footer>
  </ThemeProvider>
);
