import React from "react";
import {
    Switch,
    Case,
    Default
} from '../../cmp';

export default function ExaSwitch(){

    const inp = React.useRef(null);
    const [goal, setGoal] = React.useState(45);

    const onSubmit = () => {
        setGoal(inp.current.value);
    }

    return (
        <>
        <input type="number" ref={inp} />
        <br />
        <button onClick={onSubmit}>Save</button>
        <br />
        <Switch>
            <Case condition={goal < 30}>Este valor es menor de 30</Case>
            <Case condition={goal >= 30 && goal < 60}>este valor es mayor o igual de 30.</Case>
            <Case condition={goal >= 60}>Este valor es 60 o mas.</Case>
            <Default>Esto es el valor default.</Default>
        </Switch>
        </>
    )
};