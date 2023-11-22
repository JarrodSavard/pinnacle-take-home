import React, {useState} from "react";
import {CiSearch} from "react-icons/ci";
import sandwichesData from "../../fakeData/sandwiches.json";
import {useSandwichStore} from "../../store/sandwichStore";
import {filterAndSortSandwiches} from "../../utilities/helpers";
import styles from "./index.module.css";

export const SearchBar = () => {
    const [query, setQuery] = useState<string>("");
    const [timer, setTimer] = useState<number | null>(null);
    const setSandwiches = useSandwichStore((state) => state.setSandwiches);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setQuery(inputValue);

        if (timer) {
            clearTimeout(timer);
        }

        const newTimer = window.setTimeout(async () => {
            if (inputValue.trim().length === 0) {
                setSandwiches(sandwichesData);
                return;
            }

            try {
                // Filter and sort based on the match quality
                const filteredSandwiches = filterAndSortSandwiches(sandwichesData, inputValue);

                setSandwiches(filteredSandwiches);
            } catch (err) {
                console.error(err);
            }
        }, 150);

        setTimer(newTimer);
    };

    return (
        <div className={styles.inputWrapper}>
            <CiSearch className={styles.searchIcon} />
            <input
                className={styles.searchInput}
                type="text"
                placeholder="search"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};
