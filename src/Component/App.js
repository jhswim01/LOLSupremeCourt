import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Header from "./Header";
import Footer from "./Footer";
import LoopModeInfinityLoop from "./LoopModeInfinityLoop";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header></Header>
      <LoopModeInfinityLoop />
      <Footer></Footer>
    </ThemeProvider>
  );
};
