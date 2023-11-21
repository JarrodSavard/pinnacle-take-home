# Sandwich Finder Application

## Overview

The Sandwich Finder is a React-based web application designed to list and filter sandwiches based on user input. It uses the React Context API for state management, ensuring a clean and efficient way of handling application-wide state. The core functionality revolves around a dynamic search bar, which allows users to filter sandwiches in real-time. The application also implements debouncing in the search bar to enhance performance and user experience.

## Features

-   **Sandwich Listing**: Displays a list of sandwiches with their respective ingredients.
-   **Dynamic Search**: Users can filter the list of sandwiches using the search bar.
-   **Debouncing**: Implemented on the search input to limit the rate of API calls or filtering operations, improving performance.
-   **React Context API**: Utilized for managing and passing the application's state effectively across components.

## How It Works

-   The application initially displays all available sandwiches.
-   As a user types in the search bar, the list of sandwiches updates in real-time to reflect only those matching the search query.
-   Debouncing ensures that the filtering logic is triggered only after the user has stopped typing for a set duration, reducing unnecessary processing.
-   The React Context API provides a centralized state for sandwiches, making it accessible to various components of the application.

## Technologies Used

-   React.js
-   React Context API
-   CSS Modules for styling
-   Debouncing techniques for efficient search filtering

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
