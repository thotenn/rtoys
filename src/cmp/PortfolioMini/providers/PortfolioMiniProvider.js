import React from "react";
import PortfolioMiniContext from "./PortfolioMiniContext";
import useAppReducer from "../hooks/useAppReducer";

const PortfolioMiniProvider = ({ children }) => {
    const {state, dispatch, actionList} = useAppReducer();

    const dataSet = {
        state, dispatch, actionList
    };

    return (
        <PortfolioMiniContext.Provider value={dataSet}>
            {children}
        </PortfolioMiniContext.Provider>
    )
}

export default PortfolioMiniProvider;