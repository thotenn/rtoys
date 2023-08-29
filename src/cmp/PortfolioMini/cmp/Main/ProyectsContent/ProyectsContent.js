import React from "react";
import "./Proyects.css";
import { ProyectCard } from "./ProyectCard";

export const ProyectsContent = ({ data }) => {
  return (
    <div className="projects__content grid filters__active">
      {data.map((item, key) => (
        <ProyectCard key={key} data={item} />
      ))}
    </div>
  );
};
