import React, { Component } from 'react';
import { SimpleDashBeauty1 } from './cmp/SimpleDashBeauty1/SimpleDashBeauty1';
// import { PortfolioMini } from './cmp/PortfolioMini';
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
            {/* <PortfolioMini /> */}
            {/* <PortfolioMiniOriginal /> */}
            <SimpleDashBeauty1 />
         </div>
      );
   }
}
export default App;