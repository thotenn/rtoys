import React from "react";
import { Case, Default, Switch } from "../../../lib";
import { useApp } from "../../../providers";
import { ProyectsContent } from "../ProyectsContent";
import { SkillsContent } from "../SkillsContent/SkillsContent";

export const FiltersSection = () => {
  const { state } = useApp();
  const { filterActive } = state.dyn.main;

  return (
    <div className="filters__sections">
      <Switch>
        <Case condition={filterActive === "projects"}>
          <ProyectsContent data={state.sections.main.projects.articles} />
        </Case>
        <Case condition={filterActive === "skills"}>
          <SkillsContent data={state.sections.main.skills.data} />
        </Case>
        <Default>
          <></>
        </Default>
      </Switch>
    </div>
  );
};
