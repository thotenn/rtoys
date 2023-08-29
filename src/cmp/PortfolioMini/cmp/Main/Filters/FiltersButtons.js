import React from "react";
import { useApp } from "../../../providers";

export const FiltersButtons = () => {
  const { state, dispatch, actionList } = useApp();
  const { filterActive } = state.dyn.main;
  const { targets } = state.sections.main;
  const { main } = state.sections;

  const changeTarget = (id) =>
    dispatch({
      type: actionList.DYN_MAIN_FILTERACTIVE,
      payload: id,
    });

  return (
    <ul className="filters__content">
      {targets.map((item, key) => (
        <button
          key={key}
          className={
            "filters__button" +
            (filterActive === item ? " filter-tab-active" : "")
          }
          onClick={() => changeTarget(item)}
        >
          {main[item].title}
        </button>
      ))}
    </ul>
  );
};
