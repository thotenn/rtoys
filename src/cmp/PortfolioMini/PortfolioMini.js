/**
 * Requires font awesome css inside index.html
 */

import React from "react";
import { useApp } from "./providers";
import { Container } from "./cmp/Container";
import Header from "./cmp/Header";
import Main from "./cmp/Main";
import Footer from "./cmp/Footer/Footer";
import "./assets/PortfolioMini.css";

export const PortfolioMini = () => {
  const { state, actionList, dispatch } = useApp();

  const switchDarkMode = () => dispatch({ type: actionList.DARK_MODE });

  return (
    <Container darkTheme={state.theme.dark_mode}>
      <Header data={state.sections.header} darkMode={state.theme.dark_mode} switchDarkMode={switchDarkMode} />
      <Main />
      <Footer txt={state.sections.footer.txt} />
    </Container>
  );
};
