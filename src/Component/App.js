import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SwipeableViews from "react-swipeable-views";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
`;

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff"
  },
  slide1: {
    background: "#FEA900"
  },
  slide2: {
    background: "#B3DC4A"
  },
  slide3: {
    background: "#6AC0FF"
  }
};

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Header></Header>
    <SwipeableViews
      onChangeIndex={(index, indexLatest, meta) => {
        console.log("change index");
        console.log(index, indexLatest, meta);
        window.scroll({
          top: 0,
          behavior: "smooth"
        });
      }}
    >
      <Content />
      <Content />
      <Content />
    </SwipeableViews>
    <Footer></Footer>
  </ThemeProvider>
);

// export default () => (
//   <ThemeProvider theme={Theme}>
//     <GlobalStyles />
//     <Header></Header>
//     <ContentWrapper>
//       <Content></Content>
//     </ContentWrapper>
//     <Footer></Footer>
//   </ThemeProvider>
// );
