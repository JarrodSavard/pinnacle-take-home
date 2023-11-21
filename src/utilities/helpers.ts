import {Sandwich} from "../interfaces/Global";

/**
 * Filters and sorts an array of sandwiches based on a given input value.
 *
 * The function first filters the sandwiches by checking if their name includes
 * the input value (case-insensitive). Then, it sorts the filtered sandwiches:
 * - Sandwiches whose names start with the input value are considered a better match.
 * - If both or neither of the sandwiches start with the input value, they are sorted alphabetically.
 *
 * @param {Sandwich[]} sandwiches - The array of sandwiches to be filtered and sorted.
 * @param {string} inputValue - The input value used for filtering and sorting the sandwiches.
 * @returns {Sandwich[]} - An array of filtered and sorted sandwiches.
 */
export const filterAndSortSandwiches = (sandwiches: Sandwich[], inputValue: string): Sandwich[] => {
    const lowerCaseInput = inputValue.toLowerCase();

    return sandwiches
        .filter((sandwich) => sandwich.name.toLowerCase().includes(lowerCaseInput))
        .sort((a, b) => {
            const startsWithA = a.name.toLowerCase().startsWith(lowerCaseInput);
            const startsWithB = b.name.toLowerCase().startsWith(lowerCaseInput);

            if (startsWithA && !startsWithB) {
                return -1; // A is a better match
            } else if (!startsWithA && startsWithB) {
                return 1; // B is a better match
            } else {
                // If both start with the query or neither, sort alphabetically
                return a.name.localeCompare(b.name);
            }
        });
};
