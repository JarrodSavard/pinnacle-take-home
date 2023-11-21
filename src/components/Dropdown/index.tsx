import {useState} from "react";
import {Sandwich} from "../../interfaces/Global";
import styles from "./index.module.css";

export const Dropdown = (props: Sandwich) => {
    const [expandedSandwichId, setExpandedSandwichId] = useState<number | null>(null);

    const toggleDropdown = (id: number) => {
        setExpandedSandwichId(expandedSandwichId === id ? null : id);
    };

    return (
        <div className={styles.dropdownContainer}>
            <div key={props.id}>
                <button
                    className={styles.dropdownButton}
                    onClick={() => toggleDropdown(props.id)}>
                    {props.name}
                    <span className={expandedSandwichId === props.id ? styles.arrowOpen : styles.arrowClosed}></span>
                </button>
                {expandedSandwichId === props.id && (
                    <div className={`${styles.dropdownContent} ${styles.dropdownContentExpanded}`}>
                        <ul>
                            {props.ingredients.map((ingredient, index) => (
                                <li
                                    className={styles.dropdownItem}
                                    key={index}>
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
