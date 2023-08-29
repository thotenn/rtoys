import React, { Component } from 'react';
import { PortfolioMini } from './cmp/PortfolioMini';
// import { PortfolioMiniOriginal } from './cmp/PortfolioMiniOriginal/PortfolioMini';

// import ExaSwitch from './examples/BasicCode/ExaSwitch';
// import { CardLayout, CardProfile } from './cmp';
class App extends Component{
   render(){
      return(
         <div>
            {/* <CardLayout /> */}
            {/* <ExaSwitch /> */}
            {/* <CardProfile /> */}
            <PortfolioMini />
            {/* <PortfolioMiniOriginal /> */}
         </div>
      );
   }
}
export default App;