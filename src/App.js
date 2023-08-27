import React, { Component } from 'react';
import ExaSwitch from './examples/BasicCode/ExaSwitch';
import { CardLayout, CardProfile } from './cmp';
class App extends Component{
   render(){
      return(
         <div>
            {/* <CardLayout /> */}
            {/* <ExaSwitch /> */}
            <CardProfile />
         </div>
      );
   }
}
export default App;