import React, { Component } from 'react';
import { PortfolioMini } from './cmp/PortfolioMini/PortfolioMini';
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
         </div>
      );
   }
}
export default App;