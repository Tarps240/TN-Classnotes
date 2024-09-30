// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the color of the year span every second
function changeYearColor() {
    const yearSpan = document.getElementById('year-span');
    yearSpan.style.color = getRandomColor();
}

// Call changeYearColor every 1000 milliseconds (1 second)
setInterval(changeYearColor, 1000);

// Setting background colors for different classes
function setBackgroundColors() {
    const completedItems = document.querySelectorAll('.completed');
    const ongoingItems = document.querySelectorAll('.ongoing');
    const comingItems = document.querySelectorAll('.coming');

    // Set green background for completed items
    completedItems.forEach(item => {
        item.style.backgroundColor = 'green';
        item.style.color = 'white'; // Optional: to make text readable
    });

    // Set yellow background for ongoing items
    ongoingItems.forEach(item => {
        item.style.backgroundColor = 'yellow';
    });

    // Set red background for coming items
    comingItems.forEach(item => {
        item.style.backgroundColor = 'red';
        item.style.color = 'white'; // Optional: to make text readable
    });
}

// Apply background colors immediately
setBackgroundColors();
