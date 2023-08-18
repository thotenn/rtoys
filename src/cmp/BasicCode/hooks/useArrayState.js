import React from "react";

const useArrayState = (initialState = []) => {
    const [state, setState] = React.useState(initialState);

    const add = (newValue) => {
        setState(currentState => [...currentState, newValue]);
    };

    const remove = (index) => {
        setState(currentState => {
            const newState = [...currentState];
            newState.splice(index, 1);
            return newState;
        });
    };

    return [state, { add, remove }];
}

export default useArrayState;