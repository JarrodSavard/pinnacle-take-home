import {useState} from "react";
import "./App.css";
import {FilteredDisplay} from "./components/FilteredDisplay";
import {SearchBar} from "./components/SearchBar";
import {SandwichContext} from "./context/sandwichContext";
import sandwichData from "./fakeData/sandwiches.json";
import {Sandwich} from "./interfaces/Global";

function App() {
    const [sandwiches, setSandwiches] = useState<Sandwich[]>(sandwichData);

    return (
        <>
            <SandwichContext.Provider value={{sandwiches, setSandwiches}}>
                <SearchBar />
                <FilteredDisplay />
            </SandwichContext.Provider>
        </>
    );
}

export default App;
