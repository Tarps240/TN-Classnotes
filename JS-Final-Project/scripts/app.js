// Ensure the DOM is fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', function () {

    // *** SIGN-UP FORM HANDLER ***
    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting and refreshing the page
            event.preventDefault();

            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validate that the passwords match
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }

            // Check if the username already exists in localStorage
            const existingUser = localStorage.getItem(`user_${newUsername}`);
            if (existingUser) {
                alert('Username already exists. Please choose a different username.');
                return;
            }

            // Store the new user's credentials in localStorage
            localStorage.setItem(`user_${newUsername}`, JSON.stringify({ password: newPassword }));
            alert('Account created successfully! You can now log in.');

            // Redirect the user to the login page after successful sign-up
            window.location.href = 'index.html';
        });
    }

    // *** LOGIN FORM HANDLER ***
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting and refreshing the page
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check if the username exists in localStorage
            const storedUser = localStorage.getItem(`user_${username}`);
            if (!storedUser) {
                alert('Username not found. Please sign up first.');
                return;
            }

            // Parse the stored user data (the password)
            const userData = JSON.parse(storedUser);

            // Validate the password
            if (password === userData.password) {
                // Store the logged-in user in localStorage
                localStorage.setItem('loggedInUser', username);
                // Redirect to the dashboard page after successful login
                window.location.href = 'dashboard.html';
            } else {
                alert('Incorrect password. Please try again.');
            }
        });
    }

    // *** DASHBOARD HANDLER ***
    // Display logged-in user and their data on the dashboard (if applicable)
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const usernameDisplay = document.getElementById('usernameDisplay');
        if (usernameDisplay) {
            usernameDisplay.textContent = loggedInUser;
        }

        // Load user-specific data (for demo purposes, we'll use dummy data for now)
        const habits = JSON.parse(localStorage.getItem(`habits_${loggedInUser}`)) || {
            water: 5,
            meals: 3,
            exercise: 30,
            sleep: 7,
            mood: 7
        };

        // Update the dashboard with habit data (adjust the IDs to match your dashboard HTML)
        document.getElementById('waterIntake').textContent = `${habits.water}/8 cups`;
        document.getElementById('mealsLogged').textContent = `${habits.meals}/4 meals`;
        document.getElementById('exerciseDuration').textContent = `${habits.exercise} min`;
        document.getElementById('sleepHours').textContent = `${habits.sleep} hours`;
        document.getElementById('moodStatus').textContent = habits.mood >= 7 ? 'Happy' : 'Neutral';

        // *** LOG OUT HANDLER ***
        const logOutBtn = document.getElementById('logOutBtn');
        if (logOutBtn) {
            logOutBtn.addEventListener('click', function() {
                localStorage.removeItem('loggedInUser'); // Clear the logged-in user session
                window.location.href = 'index.html'; // Redirect to login
            });
        }
    }
});