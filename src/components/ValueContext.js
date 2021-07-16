import { createContext } from "react";


export const ValueContext = createContext(null);

export const defaultValues = {
    bill : 0,
    tip : 0,
    people: 0
}