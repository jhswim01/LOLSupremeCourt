import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

function slideRenderer(params) {
  const { index, key } = params;
  // console.log("index inside renderer:", index);
  // console.log("key inside renderer:", key);
  const N_MOD = 3;

  switch (mod(index, N_MOD)) {
    case 0:
      return <Content key={key} index={mod(index, N_MOD)} />;
    case 1:
      return <Content key={key} index={mod(index, N_MOD)} />;
    case 2:
      return <Content key={key} index={mod(index, N_MOD)} />;
    default:
      return null;
  }
}

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Header></Header>
    <VirtualizeSwipeableViews
      slideRenderer={slideRenderer}
      onChangeIndex={(index, indexLatest, meta) => {
        console.log("change index");
        console.log(index, indexLatest, meta);
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
    />
    <Footer></Footer>
  </ThemeProvider>
);
