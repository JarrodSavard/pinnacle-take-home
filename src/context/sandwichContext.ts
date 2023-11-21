import React, {createContext} from "react";
import sandwichData from "../fakeData/sandwiches.json";
import {Sandwich} from "../interfaces/Global";

// Define the context type
interface SandwichContextType {
    sandwiches: Sandwich[];
    setSandwiches: React.Dispatch<React.SetStateAction<Sandwich[]>>;
}

export const SandwichContext = createContext<SandwichContextType>({
    sandwiches: sandwichData,
    setSandwiches: () => {},
});
