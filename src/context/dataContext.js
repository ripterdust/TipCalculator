const { createContext } = require("react");


export const ValueContext = createContext({
    bill: 0,
    tip: 0,
    people: 0
});