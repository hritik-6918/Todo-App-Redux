# Redux To-Do List App

This project is a simple to-do list application built with React and Redux. Users can add tasks, mark them as complete, edit them, and delete them. The state management for the application is handled using Redux.

## Features

- Add new tasks to the list.
- Mark tasks as complete/incomplete using checkboxes.
- Edit existing tasks.
- Remove tasks from the list.
- State management powered by Redux Toolkit.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (v6 or above)

## Getting Started

Follow these steps to set up and run the project locally.

### Step 1: Clone the Repository

```bash
$ git clone https://github.com/yourusername/redux-todo-app.git
$ cd redux-todo-app
```

### Step 2: Install Dependencies

Install the required dependencies by running:

```bash
$ npm install
```

### Step 3: Start the Application

To start the development server, use the following command:

```bash
$ npm start
```

The application will open in your default web browser at `http://localhost:3000`.

## File Structure

- **src/app/store.js**: Configures the Redux store.
- **src/features/todoSlice.js**: Contains the Redux slice for managing to-do tasks.
- **src/App.js**: Main component that renders the to-do list and handles user interactions.

## Usage

1. Enter a task in the input field and click "Add Task" to add it to the list.
2. Mark a task as complete or incomplete using the checkbox.
3. Click "Edit" next to a task to modify it. Save or cancel your changes.
4. Click "Remove" to delete a task from the list.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **JavaScript (ES6)**: For scripting.
- **HTML5 & CSS3**: For styling.

## Contributing

Contributions are welcome! If you find any issues or have ideas for new features, feel free to open an issue or create a pull request.
