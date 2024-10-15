// Ensure the DOM is fully loaded before executing JavaScript.
document.addEventListener("DOMContentLoaded", function () {
  
    // Grabs the loggedInUser from localStorage (if available) to persist login state.
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    // Update the user display if logged in.
    const usernameDisplay = document.getElementById("usernameDisplay");
    if (usernameDisplay && loggedInUser) {
      usernameDisplay.textContent = loggedInUser;
    }
  
    // Handle login form submission.
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page.
        
        // Retrieve entered username and password.
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Check if the user exists in localStorage.
        const storedUser = localStorage.getItem(`user_${username}`);
        if (!storedUser) {
          alert("Username not found. Please sign up first.");
          return;
        }
  
        // Parse the stored user data and validate the password.
        const userData = JSON.parse(storedUser);
        if (password === userData.password) {
          localStorage.setItem("loggedInUser", username); // Store logged-in user.
          window.location.href = "dashboard.html"; // Redirect to dashboard.
        } else {
          alert("Incorrect password. Please try again.");
        }
      });
    }
    
    // Handle sign-up form submission for new users.
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh.
  
        // Capture new user data.
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
  
        // Validate password match.
        if (newPassword !== confirmPassword) {
          alert("Passwords do not match. Please try again.");
          return;
        }
  
        // Check if the username already exists.
        const existingUser = localStorage.getItem(`user_${newUsername}`);
        if (existingUser) {
          alert("Username already exists. Please choose a different username.");
          return;
        }
  
        // Save new user data to localStorage.
        localStorage.setItem(`user_${newUsername}`, JSON.stringify({ password: newPassword }));
        alert("Account created successfully! You can now log in.");
        window.location.href = "index.html"; // Redirect to login page.
      });
    }
  
    // Google Sign-In logic.
    function handleCredentialResponse(response) {
      const userObject = jwt_decode(response.credential); // Decode the JWT token from Google.
      console.log("User Info:", userObject); // Log the user info to the console.
  
      // Store Google user's name in localStorage and redirect to the dashboard.
      localStorage.setItem("loggedInUser", userObject.name);
      window.location.href = "dashboard.html";
    }
  
    // Initialize Google Sign-In button.
    google.accounts.id.initialize({
      client_id: "132804289720-d9jch8jbciemd4m2qejjv8c83u6niocu.apps.googleusercontent.com", // Your Google client ID.
      callback: handleCredentialResponse // Callback function after successful login.
    });
  
    google.accounts.id.renderButton(document.querySelector(".g_id_signin"), {
      theme: "outline",
      size: "large"
    });
  
    google.accounts.id.prompt(); // Display the Google Sign-In prompt.
  
    // Handle log out functionality.
    const logOutBtn = document.getElementById("logOutBtn");
    if (logOutBtn) {
      logOutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser"); // Remove user session.
        window.location.href = "index.html"; // Redirect to login page.
      });
    }
  
    // Handle "Back to Dashboard" button functionality.
    const backToDashboardBtn = document.getElementById("backToDashboard");
    if (backToDashboardBtn) {
      backToDashboardBtn.addEventListener("click", function () {
        window.location.href = "dashboard.html"; // Navigate to dashboard.
      });
    }
  
    // Example of handling habit logging (e.g., for calories, water intake).
    const habitForms = {
      waterForm: "water",
      mealsForm: "meals",
      exerciseForm: "exercise",
      sleepForm: "sleep",
      calorieForm: "calorie"
    };
  
    // Loop through each habit form and handle form submissions.
    Object.keys(habitForms).forEach((formId) => {
      const formElement = document.getElementById(formId);
      if (formElement) {
        formElement.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent form refresh.
  
          // Capture the inputted value for each habit (e.g., calorie count).
          const habitValue = document.getElementById(habitForms[formId]).value;
  
          // Retrieve existing habit data or initialize an empty array.
          const habitData = JSON.parse(localStorage.getItem(`habits_${loggedInUser}_${habitForms[formId]}`)) || [];
  
          // Log the current date and inputted value to habit data.
          habitData.push({
            date: new Date().toISOString().split("T")[0], // Store only the date part.
            value: habitValue
          });
  
          // Save the updated habit data back to localStorage.
          localStorage.setItem(`habits_${loggedInUser}_${habitForms[formId]}`, JSON.stringify(habitData));
  
          // Confirm successful logging.
          alert(`${habitForms[formId]} logged successfully!`);
          window.location.href = "dashboard.html"; // Redirect to dashboard after logging.
        });
      }
    });
  
    // Render habit data charts using Chart.js.
    const chartContainers = {
      waterChart: "water",
      mealsChart: "meals",
      exerciseChart: "exercise",
      sleepChart: "sleep",
      calorieChart: "calorie"
    };
  
    Object.keys(chartContainers).forEach((chartId) => {
      const chartElement = document.getElementById(chartId);
      if (chartElement) {
        // Retrieve stored data for the chart.
        const habitData = JSON.parse(localStorage.getItem(`habits_${loggedInUser}_${chartContainers[chartId]}`)) || [];
  
        const labels = habitData.map((entry) => entry.date); // Extract dates for the chart.
        const data = habitData.map((entry) => entry.value); // Extract values for the chart.
  
        // Create the chart.
        new Chart(chartElement, {
          type: "line", // Line chart for habit tracking.
          data: {
            labels: labels, // X-axis labels.
            datasets: [{
              label: `${chartContainers[chartId]} data over the past 7 days`,
              data: data, // Y-axis values.
              borderColor: "rgba(75, 192, 192, 1)", // Line color.
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true // Ensure Y-axis starts from 0.
              }
            }
          }
        });
      }
    });
  
  });
  