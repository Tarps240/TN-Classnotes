# Final Project: Advanced HTML, CSS, and JavaScript Challenge

## Project Overview

Welcome to the Final Project of the course! This project is designed to test your understanding of HTML, CSS, and JavaScript, with a primary focus on JavaScript. This challenge will push you to implement dynamic features, manipulate the DOM, handle events, and create a fully functional, interactive web application.

# HTML:

Build a semantic, well-structured layout for wellness app.
Use appropriate tags for the navigation, task input form, task list, and footer.

# CSS:

Apply responsive styling using CSS Grid or Flexbox for the overall layout.
Style form elements, buttons, and dynamic task lists using custom # CSS.
Use media queries to ensure that the app is mobile-friendly and responsive.

# JavaScript: (Main Focus)

Add interactivity using vanilla JavaScript. No external libraries like jQuery or frameworks like React should be used.
Manage DOM manipulation dynamically for tasks.
Use local storage to save the user's tasks across sessions.
Implement event handling for task addition, editing, filtering, and deletion.
Write reusable, clean, and modular JavaScript code.

## Core Features (Required)

Login Functionality:
The user must be able to enter a username and password to log in.
If the login credentials are incorrect, an error message should be displayed.
Upon successful login, the user is redirected to the dashboard.

Habit Logging:
The user must be able to log their water intake, meals, exercise, sleep, and mood through an intuitive form.
Habit data should be saved for the logged-in user and persist between sessions (use LocalStorage for MVP).

Dashboard Display:
The user’s name should be displayed on the dashboard.
The dashboard must show an accurate summary of the user’s logged data for the current day (e.g., water intake, meals logged, exercise duration, sleep hours, and mood).
Each wellness category should have a visually distinct summary box.

Data Validation:
Input fields for habit logging (e.g., water intake, sleep hours) must validate the data to ensure they are within reasonable limits (e.g., water intake between 0 and 10 glasses, sleep between 0 and 12 hours).

Logout Functionality:
The user must be able to log out, which clears their session and redirects them to the login page.
Upon logout, any sensitive data (like the user’s login status) should be cleared from localStorage.

Progress Visualization:
A progress graph should display the user’s logged data (e.g., water intake, sleep patterns) over a selectable time range (e.g., past week or month).
The user must be able to see trends in their health habits visually (bar or line charts).

## Usage Instructions

