import React from "react";
import { FiltersButtons } from "./Filters/FiltersButtons";
import { FiltersSection } from "./Filters/FiltersSection";

export const Main = () => {
  return (
    <main>
      <section className="container">
        <FiltersButtons />

        <FiltersSection />
      </section>
    </main>
  );
};

export default Main;
