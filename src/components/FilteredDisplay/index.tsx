import {useContext} from "react";
import {SandwichContext} from "../../context/sandwichContext";
import {Dropdown} from "../Dropdown";
import styles from "./index.module.css";

export const FilteredDisplay = () => {
    const {sandwiches} = useContext(SandwichContext);

    return (
        <div className={styles.filteredDisplayContainer}>
            {sandwiches.map((sandwich) => (
                <Dropdown
                    key={sandwich.id}
                    id={sandwich.id}
                    ingredients={sandwich.ingredients}
                    name={sandwich.name}
                />
            ))}
        </div>
    );
};
