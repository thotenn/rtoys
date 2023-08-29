import React from "react";

export const SkillData = ({ title, level }) => {
  return (
    <div className="skills__data">
      <i className="fa-regular fa-circle-check" />

      <div>
        <h3 className="skills__name">{title}</h3>
        <span className="skills__level">{level}</span>
      </div>
    </div>
  );
};
