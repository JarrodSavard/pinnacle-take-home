# Sandwich Finder Application

## Overview

The Sandwich Finder is a React-based web application designed to list and filter sandwiches based on user input. It now uses the Zustand state management library instead of the React Context API. Zustand provides a simpler and more lightweight approach to state management, while still offering the same benefits of centralized state and global accessibility.

## Features

-   **Sandwich Listing**: Displays a list of sandwiches with their respective ingredients.
-   **Dynamic Search**: Users can filter the list of sandwiches using the search bar.
-   **Debouncing**: Implemented on the search input to limit the rate of API calls or filtering operations, improving performance.
-   **Zustand State Management**: Replaces the React Context API, providing a more intuitive and streamlined state management solution.

## How It Works

-   The application initially displays all available sandwiches.
-   As a user types in the search bar, the list of sandwiches updates in real-time to reflect only those matching the search query.
-   Debouncing ensures that the filtering logic is triggered only after the user has stopped typing for a set duration, reducing unnecessary processing.
-   Zustand manages the application's state, making it accessible to various components and facilitating state updates in a clear and organized manner.

## Technologies Used

-   React.js
-   Zustand for state management
-   CSS Modules for styling
-   Debouncing techniques for efficient search filtering

## Live Demo

[Click Here](https://sandwiches-theta.vercel.app/)

## Running the Application

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies:

    ```
    npm install
    ```

4. Start the development server:

    ```
    npm run dev

    ```

5. Open your browser and navigate to `http://localhost:5173`.

## Benefits of Using Zustand

Replacing the React Context API with Zustand offers several advantages:

-   **Simplicity**: Zustand provides a simpler and more intuitive API for managing state compared to the Context API.
-   **Reduced Boilerplate**: Zustand eliminates the need for manual context creation and propagation, reducing boilerplate code.
-   **Enhanced Performance**: Zustand's reactivity system is optimized for performance, ensuring efficient state updates and component re-renders.
-   **Improved Developer Experience**: Zustand's overall design and API make it easier for developers to understand and utilize state management, leading to a better development experience.

In summary, the Sandwich Finder application leverages React and Zustand to provide a user-friendly and efficient sandwich filtering experience. The application's use of Zustand demonstrates the benefits of this state management library over the React Context API, offering a simpler, more performant, and developer-friendly approach to managing application state.
