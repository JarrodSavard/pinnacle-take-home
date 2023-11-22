import {useSandwichStore} from "../../store/sandwichStore";
import {Dropdown} from "../Dropdown";
import styles from "./index.module.css";

export const FilteredDisplay = () => {
    const {sandwiches} = useSandwichStore();

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
