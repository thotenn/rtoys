import { useContext } from "react";
import PortfolioMiniContext from "./PortfolioMiniContext";


export default function useApp() {
    return useContext(PortfolioMiniContext)
}