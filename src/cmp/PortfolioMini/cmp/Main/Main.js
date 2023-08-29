import React from "react";
import { FiltersButtons } from "./Filters/FiltersButtons";
import { FiltersSection } from "./Filters/FiltersSection";

export const Main = () => {
  return (
    <main className="main">
      <section className="filters container">
        <FiltersButtons />

        <FiltersSection />
      </section>
    </main>
  );
};

export default Main;
