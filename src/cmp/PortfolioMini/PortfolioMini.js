/**
 * Requires font awesome css inside index.html
 */

import React from "react";
import "./assets/PortfolioMini.css";
import { Container } from "./cmp/Container";
import { Footer } from "./cmp/Footer/Footer";
import Header from "./cmp/Header";
import { useApp } from "./providers";
import Main from "./cmp/Main";

export const PortfolioMini = () => {
  const {state} = useApp();

  return (
    <Container darkTheme={state.theme.dark_mode}>
      <Header />
      <Main />
      <Footer txt={state.sections.footer.txt} />
    </Container>
  );
};
