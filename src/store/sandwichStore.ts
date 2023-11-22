import create from "zustand";
import sandwichData from "../fakeData/sandwiches.json";
import {Sandwich} from "../interfaces/Global";

interface SandwichState {
    sandwiches: Sandwich[];
    setSandwiches: (sandwiches: Sandwich[]) => void;
}

export const useSandwichStore = create<SandwichState>((set) => ({
    sandwiches: sandwichData,
    setSandwiches: (sandwiches) => set(() => ({sandwiches})),
}));
