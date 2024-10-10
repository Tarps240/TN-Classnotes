// Ensure the DOM is fully loaded before running any scripts,this event listener waits for the DOM to be fully loaded before executing any scripts inside it. This ensures that all HTML elements are available when the script attempts to interact with them.

document.addEventListener('DOMContentLoaded', function () {

    // *** SIGN-UP FORM HANDLER ***
    // The signupForm element is selected from the DOM using getElementById. Then, the code attaches an event listener for the submit event when the user submits the form. 

    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {

            // Prevent the form from submitting and refreshing the page, the event.preventDefault(): prevents the default behavior of submitting the form, which would refresh the page. Instead, we handle the form data manually in JavaScript.
            event.preventDefault();

            // These lines collect the values that the user entered into the sign-up form:
            // newUsername: The new username the user wants to register.
            // newPassword: The new password the user chooses.
            // confirmPassword: A confirmation of the new password to ensure it matches.

            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validate that the passwords match, this checks if the newPassword and confirmPassword match. If they don't, an alert is shown and the sign-up process is stopped the return exits the function.
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }

            // Check if the username already exists, localStorage.getItem() is used to check if a username already exists in localStorage.If a user with the same username exists, the function alerts the user and stops the sign-up process to avoid duplicate accounts.
            const existingUser = localStorage.getItem(`user_${newUsername}`);
            if (existingUser) {
                alert('Username already exists. Please choose a different username.');
                return;
            }

            // Store the new user's credentials in localStorage If the sign-up is successful (no matching usernames, and passwords match), the new username and password are stored in localStorage using setItem(). The password is stored in an object and converted to a string using JSON.stringify() for easy storage. After storing the credentials, an alert confirms the account creation, and the user is redirected to the login page (index.html).

            localStorage.setItem(`user_${newUsername}`, JSON.stringify({ password: newPassword }));
            alert('Account created successfully! You can now log in.');

            // Redirect the user to the login page after successful sign-up
            window.location.href = 'index.html';
        });
    }

    // *** LOGIN FORM HANDLER ***
    // This code checks if a login form exists on the page and attaches an event listener to handle the form's submit event.
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting and refreshing the page
            event.preventDefault();

            // The entered username and password are collected from the login form fields.
            // localStorage.getItem() checks if the entered username exists. If it doesn’t, an alert informs the user that they need to sign up first, and the login process is stopped.

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check if the username exists in localStorage 
            const storedUser = localStorage.getItem(`user_${username}`);
            if (!storedUser) {
                alert('Username not found. Please sign up first.');
                return;
            }

            // Parse the stored password as JSON.parse(storedUser) and converts the stored user data (which was saved as a JSON string) back into an object so we can access the password. The entered password is compared with the stored password. If they match, the user is logged in: localStorage.setItem('loggedInUser', username): This stores the logged-in user's username in localStorage, signaling that the user is authenticated. window.location.href = 'dashboard.html': After successful login, the user is redirected to the dashboard. If the password is incorrect, an alert informs the user to try again.
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
    }})

    // Display logged-in user on dashboard

window.addEventListener("DOMContentLoaded", function () {
    const usernameDisplay = document.getElementById("usernameDisplay");
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    if (!loggedInUser) {
      window.location.href = "login.html"; // Redirect to login if not logged in
    } else {
      usernameDisplay.textContent = loggedInUser;
    }
  });
  
  
  // Handle logout
  
  document.getElementById("logOutBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser"); // Clear user data
    window.location.href = "login.html"; // Redirect to login page
  });
  
  // Handle habit logging
  
  document
    .getElementById("habitForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Collect the habit data
  
      const habits = {
        water: document.getElementById("water").value,
        meals: document.getElementById("meals").value,
        exercise: document.getElementById("exercise").value,
        sleep: document.getElementById("sleep").value,
        mood: document.getElementById("mood").value,
      };
  
      // Store the data in localStorage
  
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        localStorage.setItem(`habits_${loggedInUser}`, JSON.stringify(habits));
        alert("Habits logged successfully!");
        window.location.href = "dashboard.html"; // Redirect back to dashboard
      } else {
        alert("You are not logged in. Please log in first.");
      }
    });
  
  // Display habit data on the dashboard
  
  window.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const habits = JSON.parse(localStorage.getItem(`habits_${loggedInUser}`));
      if (habits) {
        document.getElementById(
          "waterIntake"
        ).textContent = `${habits.water}/8 cups`;
        document.getElementById(
          "mealsLogged"
        ).textContent = `${habits.meals}/4 meals`;
        document.getElementById(
          "exerciseDuration"
        ).textContent = `${habits.exercise} min`;
        document.getElementById(
          "sleepHours"
        ).textContent = `${habits.sleep} hours`;
        document.getElementById("moodStatus").textContent =
          habits.mood >= 7 ? "Happy" : "Neutral";
      }
    }
  });
  
  // Progress visualization using Chart.js
  window.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const habits = JSON.parse(localStorage.getItem(`habits_${loggedInUser}`));
  
      if (habits) {
        const ctx = document.getElementById("progressChart").getContext("2d");
  
        const progressChart = new Chart(ctx, {
          type: "bar", // We're creating a bar chart
          data: {
            labels: ["Water Intake", "Meals", "Exercise", "Sleep", "Mood"], // Categories of habits
            datasets: [
              {
                label: "Your Daily Wellness Data",
                data: [
                  habits.water,
                  habits.meals,
                  habits.exercise,
                  habits.sleep,
                  habits.mood,
                  
                ], // Values from the logged habits
                backgroundColor: [
                  "rgba(255, 215, 0, 0.7)", // Gold for Water
                  "rgba(255, 215, 0, 0.7)", // Gold for Meals
                  "rgba(255, 215, 0, 0.7)", // Gold for Exercise
                  "rgba(255, 215, 0, 0.7)", // Gold for Sleep
                  "rgba(255, 215, 0, 0.7)", // Gold for Mood
                ],
                borderColor: [
                  "rgba(0, 0, 0, 1)", // Black border
                  "rgba(0, 0, 0, 1)",
                  "rgba(0, 0, 0, 1)",
                  "rgba(0, 0, 0, 1)",
                  "rgba(0, 0, 0, 1)",
                ],
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  });
  
  // Request notification permission
  
  if ("Notification" in window) {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      }
    });
  }
  
  // Send a reminder notification
  
  function sendReminder() {
    if (Notification.permission === "granted") {
      new Notification("Reminder", {
        body: "Don’t forget to log your wellness habits today!",
        icon: "path/to/icon.png", // optional
      });
    }
  }
  
  // Example: Send a reminder every 24 hours (for demo)
  
  setTimeout(sendReminder, 1000 * 60 * 60 * 24); // Change to suit your time interval