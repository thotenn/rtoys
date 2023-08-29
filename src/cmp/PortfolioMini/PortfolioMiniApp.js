import React from 'react'
import PortfolioMiniProvider from './providers';
import { PortfolioMini } from './PortfolioMini';

const PortfolioMiniApp = props => {
  return (
    <PortfolioMiniProvider>
        <PortfolioMini />
    </PortfolioMiniProvider>
  )
}

export default PortfolioMiniApp