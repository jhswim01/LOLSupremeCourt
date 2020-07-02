import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </ThemeProvider>
);
