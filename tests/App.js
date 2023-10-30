import React from "react";
import { Case, FetchSuspense, StringsTools, Switch } from "../src";

const numTools = StringsTools;

const App = () => {
  return (
    <div>
        <h1>Hello {numTools.numPointsSep('456654654')}</h1>
        <h2>Prueba numero float: {numTools.floatNumPointSep(parseFloat('1234565.545'))}</h2>
        <Switch>
            <Case condition={true}>
                <h2>Hola mundo</h2>
            </Case>
        </Switch>
    </div>
  );
};
export default App;
