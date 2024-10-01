// Function to generate random color
function getRandomColor() {

    //Create a string of hex characters: '0123456789ABCDEF'
    const letters = '0123456789ABCDEF';

    // Create an empty string 'color' and set it to '#'.
    // This is the starting character of a hexadecimal color code.
    let color = '#';

    // Start a loop that runs 6 times.
    // This loop will generate each character of the 6-character hex code.
    // For each iteration in the loop, generate a random index by multiplying a random number between 0 and 1 by 16 (the length of the letters string) and rounding it down to the nearest integer. Append the character at the generated index of the letters string to the color string.
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    // After the loop ends, return the color 'string', this will be the final hex color code.
    return color;
}

// Function to get and display the current date and time.
function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const formatDateTime = now.toLocaleString(); // Formats the date and time as a readable string
    dateTimeElement.innerHTML = formatDateTime;
    dateTimeElement.style.backgroundColor = getRandomColor(); // Set random background color
}

// Function to change the color of the year span every second
function changeYearColor() {
    const yearSpan = document.getElementById('year-span');
    yearSpan.style.color = getRandomColor();
}

// Call changeYearColor every 1000 milliseconds (1 second)
setInterval(changeYearColor, 1000);

// I need to set the background colors for each different class.
function setBackgroundColors() {
    const completedItems = document.querySelectorAll('.completed');
    const ongoingItems = document.querySelectorAll('.ongoing');
    const comingItems = document.querySelectorAll('.coming');

    // Set a green background for completed items
    completedItems.forEach(item => {
        item.style.backgroundColor = 'green';
        item.style.color = 'white'; // Optional: to make text readable
    });

    // Set a yellow background for ongoing items
    ongoingItems.forEach(item => {
        item.style.backgroundColor = 'yellow';
    });

    // Set a red background for upcoming items
    comingItems.forEach(item => {
        item.style.backgroundColor = 'red';
        item.style.color = 'white'; // Make the text more readable.
    });
}

// Display the current date and time every second, 1000ms.
setInterval(displayDateTime, 1000); // Change the second paramater (1000) to change how often the color changes. 

// Apply background colors.
setBackgroundColors();
