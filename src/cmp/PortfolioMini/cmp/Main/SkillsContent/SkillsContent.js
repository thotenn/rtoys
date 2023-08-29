import React from "react";
import { SkillData } from "./SkillData";

export const SkillsContent = ({ data }) => {
  return (
    <div className="skills__content grid filters__active">
      {data.map((area, akey) => (
        <div key={akey} className="skills__area">
          <h3 className="skills__title">{area.areaTitle}</h3>

          <div className="skills__box">
            {area.groups.map((group, gkey) => (
              <div key={gkey} className="skills__group">
                {group.map((item, ikey) => (
                  <SkillData key={ikey} title={item.title} level={item.level} />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
