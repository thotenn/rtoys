import React from "react";

const Switch = ({ children }) => {
    let matchChild = null;
    let defaultCase = null;

    React.Children.forEach(children, (child) => {
        if (!matchChild && child.type === Case) {
            const { condition } = child.props;

            const conditionResult = Boolean(condition);

            if (conditionResult) {
                matchChild = child;
            }
        } else if (!defaultCase && child.type === Default) {
            defaultCase = child;
        }
    });

    return matchChild ?? defaultCase ?? null;
};

export const Case = ({ children }) => {
    return children;
}

export const Default = ({ children }) => {
    return children;
}

export default Switch;
