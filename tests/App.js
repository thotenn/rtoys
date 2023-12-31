import React from "react";
import { Case, FetchSuspense, StringsTools, Switch } from "../src";
import {useCurrency} from "../src";

const numTools = StringsTools;

const App = () => {

  const { getFormattedValue } = useCurrency({
    currency: 'gs'
  });

  return (
    <div>
        <h1>Hello {numTools.numPointsSep('456654654')}</h1>
        <h2>Prueba numero float: {numTools.floatNumPointSep(1234565)}</h2>
        <h2>Prueba2 numero float: {numTools.floatNumPointSep(1234565, '.', '.', ',', ',0000')}</h2>
        <h2>Prueba3 useCurrency: {getFormattedValue(1500000.15)}</h2>
        <Switch>
            <Case condition={true}>
                <h2>Hola mundo</h2>
            </Case>
        </Switch>
    </div>
  );
};
export default App;
